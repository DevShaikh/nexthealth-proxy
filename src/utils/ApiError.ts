/**
 * @file src/utils/ApiError.ts
 * @description Custom error class for API-specific errors.
 */

// src/utils/ApiError.ts

type ErrorDetail = string | Record<string, unknown>;

class ApiError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public errors?: ErrorDetail | ErrorDetail[];

  constructor(
    statusCode: number,
    message: string,
    isOperational = true,
    stack = "",
    errors?: ErrorDetail | ErrorDetail[]
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
