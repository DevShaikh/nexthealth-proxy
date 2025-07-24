/**
 * @file src/middleware/errorHandler.ts
 * @description Global error handling middleware for Express.
 */

import { NextFunction, Request, Response } from "express";

import env from "../config/env";

import ApiError from "../utils/ApiError";

// Error handling middleware
const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction // use underscore prefix to avoid lint error
) => {
  let error: ApiError;

  // Narrow unknown error into ApiError
  if (err instanceof ApiError) {
    error = err;
  } else {
    const maybeErr = err as Partial<{
      statusCode: number;
      message: string;
      error: string[];
      stack: string;
    }>;

    const statusCode = maybeErr.statusCode || 500;
    const message =
      maybeErr?.error?.[0] || maybeErr?.message || "Something went wrong";

    error = new ApiError(
      statusCode,
      message,
      false,
      maybeErr.stack,
      maybeErr?.error
    );
  }

  const { statusCode, message, isOperational } = error;

  const response = {
    success: false,
    code: statusCode,
    message: message,
    errors: isOperational ? error.errors : undefined, // Only include errors if it's an operational error
  };

  if (env.NODE_ENV === "development") {
    console.error("Caught by error handler:", error);
  }

  res.status(statusCode).send(response);
};

export default errorHandler;
