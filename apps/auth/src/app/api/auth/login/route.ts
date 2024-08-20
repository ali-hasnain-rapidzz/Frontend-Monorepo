import { dbConnect } from "@Config/db";
import { authEndpoint } from "@Endpoints/authEP";
import { catchAsync } from "@EPUtils/catchAsync";
import { NextRequest } from "next/server";

export const POST = catchAsync(async (req: NextRequest) => {
  await dbConnect(process.env.MONGODB_URI || "");

  return await authEndpoint.login(req);
});
