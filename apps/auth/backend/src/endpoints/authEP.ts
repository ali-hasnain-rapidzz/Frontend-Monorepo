import { catchAsync } from "@EPUtils/catchAsync";
import { loginHandler, signupHandler } from "@Handlers/auth.handler";
import { authenticatorMiddleware } from "@Middlewares/auth.middleware";
import { ValidatorMiddleware } from "@Middlewares/validator.middleware";
import { loginValidator, signUpValidator } from "@Validators/auth.validator";
import { NextRequest, NextResponse } from "next/server";

class AuthEndpoint {
  /**
   * Handle Request Method
   */
  private async handleRequest<Type extends object>(
    req: NextRequest,
    ...middlewares: Array<(dto: Type, req: NextRequest) => Promise<void | NextResponse>>
  ): Promise<NextResponse> {
    return catchAsync(async (req: NextRequest): Promise<NextResponse> => {
      const body = await req.json();
      const dto: Type = Object.assign({}, body);

      for (const middleware of middlewares) {
        const result = await middleware(dto, req);
        if (result instanceof NextResponse) {
          return result;
        }
      }

      const handler = middlewares.pop() as (dto: Type, req: NextRequest) => Promise<NextResponse>;
      return await handler(dto, req);
    })(req);
  }

  /**
   * Login
   */

  async login(req: NextRequest): Promise<NextResponse> {
    return this.handleRequest(
      req,
      ValidatorMiddleware(loginValidator),
      authenticatorMiddleware,
      loginHandler,
    );
  }

  /**
   * Sign Up
   */
  async register(req: NextRequest): Promise<NextResponse> {
    return this.handleRequest(req, ValidatorMiddleware(signUpValidator), signupHandler);
  }
}

export const authEndpoint = new AuthEndpoint();
