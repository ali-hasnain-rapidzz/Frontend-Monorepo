import { ERROR_MESSAGES } from "@Constants/constants";
import { IUser, UserType } from "@EPTypes/user.types";
import { ApiError } from "@EPUtils/ApiError";
import { EncryptLibrary } from "@Libraries/encrypt.lib";
import { TokenService } from "@Libraries/token.lib";
import { User } from "@Models/user.model";
import httpStatus from "http-status";

class UserServiceClass {
  findUserByEmail = async (email: string, allowPassword?: boolean): Promise<UserType | null> => {
    const userDoc = await User.findOne({ email }).select(allowPassword ? "+password" : "");

    if (!userDoc) {
      return null;
    }

    return userDoc.toObject() as UserType;
  };

  async loginUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<{ token: string; user: Omit<UserType, "password"> }> {
    const user = await this.findUserByEmail(email, true);
    if (!user || !(await EncryptLibrary.comparePasswords(password, user.password))) {
      throw new ApiError(httpStatus.BAD_REQUEST, ERROR_MESSAGES.INVALID_USER);
    }

    const token = TokenService.generateToken(user.email, user.name);
    const { password: usrPass, ...usertoSend } = user;
    return { token, user };
  }

  createUser = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<IUser> => {
    const hashedPassword = await EncryptLibrary.encryptPassword(password);
    const newUser = new User({ name, email, password: hashedPassword });
    return await newUser.save();
  };
}

export const UserService = new UserServiceClass();
