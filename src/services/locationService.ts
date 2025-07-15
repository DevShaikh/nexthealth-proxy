import axios, { AxiosResponse } from "axios";

import ApiError from "../utils/ApiError";

import { Location, NextHealthAPIResponse } from "../types";

import env from "../config/env";

export const getLocations = async (subdomain?: string) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<Location[]>> =
      await axios.get(
        `${env.NEXT_HEALTH_API_URL}/locations?subdomain=${subdomain}`,
        {
          headers: {
            Authorization: process.env.NEXT_HEALTH_API_TOKEN,
          },
        }
      );

    const { data: locations } = data;

    console.log(
      `[LOCATIONS] Fetched: ${locations?.length} locations`,
      locations
    );

    return locations || [];
  } catch (error) {
    console.error("[LOCATIONS] Error:", error);
    throw error instanceof ApiError
      ? error
      : new ApiError(
          500,
          `Failed to fetch locations: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
  }
};
