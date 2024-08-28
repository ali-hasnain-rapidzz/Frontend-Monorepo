import { ERROR_MESSAGES } from "@Constants/constants";
import { UserService } from "@EPServices/user.service";
import { ApiError } from "@EPUtils/ApiError";
import { loginValidator, signUpValidator } from "@Validators/auth.validator";
import httpStatus from "http-status";
import { NextResponse } from "next/server";

export const signup = async (
  parsedBody: signUpValidator,
): Promise<NextResponse> => {
  const { name, email, password } = parsedBody;

  const existingUser = await UserService.findUserByEmail(email);
  if (existingUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, ERROR_MESSAGES.ALREADY_EXISTS);
  }

  const newUser = await UserService.createUser({ name, email, password });

  return NextResponse.json(
    { message: ERROR_MESSAGES.USER_CREATED, user: newUser },
    { status: 201 },
  );
};
export const login = async (
  parsedBody: loginValidator,
): Promise<NextResponse> => {
  const { email, password } = parsedBody;

  const { token, user } = await UserService.loginUser({ email, password });

  return NextResponse.json({ token, user }, { status: 200 });
};
