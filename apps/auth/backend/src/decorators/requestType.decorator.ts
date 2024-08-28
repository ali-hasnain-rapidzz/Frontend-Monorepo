import { NextApiRequest, NextApiResponse } from "next";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export function RequestMethod(method: HttpMethod) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = async function (
      req: NextApiRequest,
      res: NextApiResponse,
      ...args: any[]
    ): Promise<void> {
      if (req.method !== method) {
        res
          .status(405)
          .json({
            message: `Method ${req.method} not allowed. Use ${method}.`,
          });
        return;
      }
      return originalMethod.apply(this, [req, res, ...args]);
    };

    return descriptor;
  };
}
