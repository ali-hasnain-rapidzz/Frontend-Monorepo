/* eslint-disable @typescript-eslint/no-unused-vars */
import { login, signup } from "@Controllers/auth.controller";
import { LoginType, SignUpType } from "@Validators/auth.validator";
import { NextRequest, NextResponse } from "next/server";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const loginHandler = async (dto: LoginType, req: NextRequest): Promise<NextResponse> => {
  return await login(dto);
};

export const signupHandler = async (dto: SignUpType, req: NextRequest): Promise<NextResponse> => {
  return await signup(dto);
};
