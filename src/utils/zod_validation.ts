import { ZodSchema, ZodError } from "zod";
import ApiError from "./ApiError";

/**
 * Validates data using a Zod schema.
 * @param schema Zod schema to validate against.
 * @param data Data to validate (e.g., req.body, req.query, req.params).
 * @returns The validated data if successful.
 * @throws ApiError if validation fails.
 */
const validate = <T>(schema: ZodSchema<T>, data: any): T => {
  try {
    return schema.parse(data); // Return validated data
  } catch (error) {
    if (error instanceof ZodError) {
      throw new ApiError(400, "Validation Error", true, "", error.errors);
    }
    throw error; // Throw other errors
  }
};

export default validate;
