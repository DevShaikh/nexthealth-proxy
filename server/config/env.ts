interface EnvConfig {
  NODE_ENV: string;
  PORT: number;
  LOG_LEVEL: string;
  NEX_HEALTH_API_URL: string;
  NEX_HEALTH_API_TOKEN: string;
}

import dotenv from "dotenv";

dotenv.config();

const env: EnvConfig = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: parseInt(process.env.PORT || "3000", 10),
  NEX_HEALTH_API_URL: process.env.NEX_HEALTH_API_URL || "https://nexhealth.info",
  NEX_HEALTH_API_TOKEN: process.env.NEX_HEALTH_API_TOKEN || "",

  LOG_LEVEL: process.env.LOG_LEVEL || "info",
};

// Basic validation (add more as needed)
if (!env.PORT || isNaN(env.PORT)) {
  console.error("FATAL ERROR: PORT environment variable is not defined or invalid.");
  process.exit(1);
}

if (!["development", "production", "test"].includes(env.NODE_ENV)) {
  console.error(
    `FATAL ERROR: NODE_ENV must be one of 'development', 'production', 'test'. Got: ${env.NODE_ENV}`
  );
  process.exit(1);
}

export default env;
