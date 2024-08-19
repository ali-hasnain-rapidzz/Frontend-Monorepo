import { NextRequest, NextResponse } from 'next/server';
import { catchAsync } from '@EPUtils/catchAsync';
import { authEndpoint } from '@Endpoints/authEP';
import { dbConnect } from '@Config/db';

export const POST = catchAsync(async (req: NextRequest) => {
  await dbConnect(process.env.MONGODB_URI || '');

  const response = await authEndpoint.register(req);

  return response;
});
