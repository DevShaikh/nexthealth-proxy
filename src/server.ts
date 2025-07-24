/**
 * @file src/server.ts
 * @description Server bootstrapping and global process-level error handling.
 */

import app from "./app";
import env from "./config/env";

// --- Global Process Error Handling ---
// Handle uncaught exceptions (synchronous errors not caught by try/catch)
process.on("uncaughtException", (err: Error) => {
  console.error("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.error(err.name, err.message, err.stack);
  // Exit the process after logging the error
  process.exit(1); // 1 indicates an error
});

// Start the Express server
const server = app.listen(env.PORT, () => {
  console.warn(`Server running in ${env.NODE_ENV} mode on port ${env.PORT}`);
});

// Handle unhandled promise rejections (asynchronous errors not caught by .catch())
process.on(
  "unhandledRejection",
  (reason: Error | { name: unknown; message: unknown; stack: unknown }) => {
    console.error("UNHANDLED REJECTION! 💥 Shutting down...");
    console.error(reason.name, reason.message, reason.stack || reason);
    // Close server and exit process
    server.close(() => {
      process.exit(1); // 1 indicates an error
    });
  }
);

// Optional: Handle SIGTERM (e.g., from Heroku or Docker stop)
process.on("SIGTERM", () => {
  console.warn("👋 SIGTERM RECEIVED. Shutting down gracefully...");
  server.close(() => {
    console.warn("Process terminated!");
  });
});
