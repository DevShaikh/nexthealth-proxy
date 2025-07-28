/**
 * @file servers/app.ts
 * @description Main Express application setup.
 */

import "module-alias/register";
import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors"; // For handling Cross-Origin Resource Sharing
import helmet from "helmet"; // For setting various HTTP headers for security
import apiRoutes from "./routes";
import errorHandler from "./middleware/errorHandler";
import logger from "./middleware/logger";
import ApiError from "./utils/ApiError";

const app: Application = express();

// Essential Security Middleware
app.use(helmet());
app.use(cors());

// Body parsers
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses incoming requests with URL-encoded payloads

// Custom Logging Middleware
app.use(logger);

// API Routes
app.use("/api", apiRoutes);

// Handle 404 Not Found errors for any unhandled routes
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(404, `Not Found - ${req.originalUrl}`));
});

// Global Error Handling Middleware (MUST be the last middleware)
app.use(errorHandler);

export default app;
