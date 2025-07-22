import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import ApiError from "../utils/ApiError";

import { Location, NextHealthAPIResponse } from "../types";

export const getLocations = async (params?: string) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<Location[]>> =
      await externalApi.get(`/locations${params}`);

    const { data: locations } = data;

    return locations || [];
  } catch (error) {
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
