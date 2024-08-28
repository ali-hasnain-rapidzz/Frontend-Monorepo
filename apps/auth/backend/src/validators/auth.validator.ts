import { InferDtoType } from "@EPUtils/Infer.type";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class signUpValidator {
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  email!: string;

  @MinLength(6)
  password!: string;
}

export class loginValidator {
  @IsEmail()
  email!: string;

  @MinLength(6)
  password!: string;
}

export type LoginType = InferDtoType<loginValidator>;
export type SignUpType = InferDtoType<signUpValidator>;
