import { UserType } from "@EPTypes/user.types";
import { Model, Schema, model, models } from "mongoose";

const userSchema = new Schema<UserType>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const User: Model<UserType> = models.User || model<UserType>("User", userSchema);

export default User;
