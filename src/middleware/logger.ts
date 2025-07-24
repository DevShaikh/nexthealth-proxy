/**
 * @file src/middleware/logger.ts
 * @description Middleware for logging incoming HTTP requests.
 */

import { Request, Response, NextFunction } from "express";
import env from "../config/env";

const logger = (req: Request, res: Response, next: NextFunction) => {
  if (env.NODE_ENV === "development") {
    console.warn(
      `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`
    );
  }
  next();
};

export default logger;
