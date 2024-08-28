import { ERROR_MESSAGES } from "@Constants/constants";
import { NextRequest, NextResponse } from "next/server";

export const authenticatorMiddleware = async (
  dto: any,
  req: NextRequest,
): Promise<void | NextResponse> => {
  console.log("In the Authentication Middleware");

  const isAuthenticated = true;
  if (!isAuthenticated) {
    console.log("Authentication failed");
    return NextResponse.json({ error: ERROR_MESSAGES.AUTHENTICATION_FAILED }, { status: 401 });
  }

  console.log("Authentication successful");
};
