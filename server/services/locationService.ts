import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import { Location, NextHealthAPIResponse } from "../types";
import { handleExternalAPIError } from "../utils/handleExternalAPIError";

export const getLocations = async (params?: string) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<Location[]>> = await externalApi.get(
      `/locations${params}`
    );

    const { data: locations } = data;

    return locations || [];
  } catch (error: unknown) {
    handleExternalAPIError(error, "Failed to fetch locations");
  }
};
