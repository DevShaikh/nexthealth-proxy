// src/middleware/validateRequest.ts
import e, { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";
import ApiError from "../utils/ApiError"; // Your custom API error class

/**
 * Middleware to validate request body, query, and params against Zod schemas.
 *
 * @param schema A Zod schema object with optional 'body', 'query', and 'params' properties.
 * Example: { query: GetLocationsSchema }
 */
export const validateRequest =
  (schema: {
    body?: AnyZodObject;
    query?: AnyZodObject;
    params?: AnyZodObject;
  }) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validate Query Parameters
      if (schema.query) {
        const validatedQuery = await schema.query.parseAsync(req.query);

        for (const key in req.query) {
          if (Object.prototype.hasOwnProperty.call(req.query, key)) {
            delete req.query[key];
          }
        }
        Object.assign(req.query, validatedQuery);
      }

      if (schema.body) {
        req.body = await schema.body.parseAsync(req.body);
      }

      if (schema.params) {
        const validatedParams = await schema.params.parseAsync(req.params);

        for (const key in req.params) {
          if (Object.prototype.hasOwnProperty.call(req.params, key)) {
            delete req.params[key];
          }
        }
        Object.assign(req.params, validatedParams);
      }

      next();
    } catch (err: any) {
      if (err instanceof ZodError) {
        const errorMessages = err.errors.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        }));
        return next(
          new ApiError(400, "Validation Error", true, "", errorMessages)
        ); // 400 Bad Request
      }
      next(err);
    }
  };

export default validateRequest;
