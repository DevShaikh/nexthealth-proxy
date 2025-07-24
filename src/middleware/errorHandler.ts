/**
 * @file src/middleware/errorHandler.ts
 * @description Global error handling middleware for Express.
 */

import { Request, Response, NextFunction } from "express";

import env from "../config/env";

import ApiError from "../utils/ApiError";

// Error handling middleware
const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err;

  // If the error is not an operational error, convert it to one
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || 500;
    const message = error.error[0] || error.message || "Something went wrong";
    error = new ApiError(statusCode, message, false, error.stack);
  }

  const { statusCode, message, isOperational } = error;

  const response = {
    success: false,
    code: statusCode,
    message: message,
    errors: isOperational ? error.errors : undefined, // Only include errors if it's an operational error
    ...(env.NODE_ENV === "development" && { stack: error.stack }), // Only show stack in dev
  };

  if (env.NODE_ENV === "development") {
    console.error("Caught by error handler:", error);
  }

  res.status(statusCode).send(response);
};

export default errorHandler;
