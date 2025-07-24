import axios from "axios";

import env from "../config/env";

const externalApi = axios.create({
  baseURL: env.NEXT_HEALTH_API_URL,
});

externalApi.interceptors.request.use(
  (config) => {
    if (env.NEXT_HEALTH_API_TOKEN) {
      config.headers.Authorization = `${env.NEXT_HEALTH_API_TOKEN}`;
      config.headers.Accept = "application/vnd.Nexhealth+json;version=2";
    } else {
      console.warn(
        "[Axios Interceptor] NEXT_HEALTH_API_TOKEN is not set or is using default value."
      );
    }

    return config;
  },
  (error) => {
    // Handle request errors (e.g., network issues before sending)
    console.error("[Axios Interceptor] Request error:", error.message);
    return Promise.reject(error);
  }
);

export default externalApi;
