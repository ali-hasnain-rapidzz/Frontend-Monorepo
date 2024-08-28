import { ERROR_MESSAGES } from "@Constants/constants";
import { ApiError } from "@EPUtils/ApiError";
import bcrypt from "bcrypt";
import httpStatus from "http-status";

class EncryptLibraryClass {
  private saltRounds: number;

  constructor() {
    this.saltRounds = 10;
  }

  encryptPassword = async (password: string): Promise<string> => {
    // Hash the password with bcrypt
    return await bcrypt.hash(password, this.saltRounds);
  };

  comparePasswords = async (password: string, savedHash: string): Promise<boolean> => {
    if (!password || !savedHash) {
      throw new ApiError(httpStatus.BAD_REQUEST, ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
    }
    return await bcrypt.compare(password, savedHash);
  };
}

export const EncryptLibrary = new EncryptLibraryClass();
