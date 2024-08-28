import { ValidationError } from "class-validator";
import { NextRequest, NextResponse } from "next/server";

export const catchAsync = (fn: (req: NextRequest) => Promise<NextResponse>) => {
  return async (req: NextRequest): Promise<NextResponse> => {
    try {
      return await fn(req);
    } catch (err) {
      if (Array.isArray(err) && err[0] instanceof ValidationError) {
        console.error("Validation Error:", err);

        const formattedErrors = err.map((error) => ({
          property: error.property,
          constraints: error.constraints,
        }));
        return NextResponse.json({ errors: formattedErrors }, { status: 400 });
      }

      console.error("Unhandled Error:", err);

      return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
  };
};
