import { NextRequest } from 'next/server';
import { catchAsync } from '@EPUtils/catchAsync';
import { dbConnect } from '@Config/db';
import { authEndpoint } from '@Endpoints/authEP';

export const POST = catchAsync(async (req: NextRequest) => {
  await dbConnect(process.env.MONGODB_URI || '');

  const response = await authEndpoint.login(req);

  return response;
});
