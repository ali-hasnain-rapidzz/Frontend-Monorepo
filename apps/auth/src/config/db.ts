import mongoose from "mongoose";

let isConnected = false;
export async function dbConnect(url: string) {
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(url);
    isConnected = true;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database");
  }
}
