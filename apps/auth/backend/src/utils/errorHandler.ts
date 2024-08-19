import { NextRequest, NextResponse } from 'next/server';
import httpStatus from 'http-status';

type APIError = {
  statusCode?: number;
  message: string;
  stack?: string;
  name?: string;
};

const mongoValidationError = (err: APIError): NextResponse => {
  return NextResponse.json(
    {
      statusCode: httpStatus.FORBIDDEN,
      message: err.message,
    },
    { status: httpStatus.FORBIDDEN }
  );
};

const sendErrorDev = (err: APIError): NextResponse => {
  const { statusCode = 500, message, stack, name } = err;

  if (name === 'ValidationError') {
    return mongoValidationError(err);
  }

  console.error('ERROR! 💥', err);

  return NextResponse.json(
    {
      error: err,
      statusCode,
      message,
      stack,
    },
    { status: statusCode }
  );
};

const sendErrorProd = (err: APIError): NextResponse => {
  let { statusCode = httpStatus.INTERNAL_SERVER_ERROR, message, name } = err;

  if (name === 'ValidationError') {
    return mongoValidationError(err);
  }

  message = message || httpStatus['500_MESSAGE'] as string;

  const response = {
    statusCode,
    message,
  };

  return NextResponse.json(response, { status: statusCode });
};

export const globalErrorHandler = (err: any, req: NextRequest): NextResponse => {
  if (process.env.NODE_ENV === 'production') {
    return sendErrorProd(err);
  } else {
    return sendErrorDev(err);
  }
};
