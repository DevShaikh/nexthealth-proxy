/**
 * @file src/utils/ApiError.ts
 * @description Custom error class for API-specific errors.
 */

class ApiError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public errors: any;

  constructor(
    statusCode: number,
    message: string,
    isOperational = true,
    stack = "",
    errors?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.errors = errors;

    // Capture stack trace for debugging
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
