import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import ApiError from "../utils/ApiError";

import { GetProvidersInput } from "../validations/schemas/providerSchema";

import { NextHealthAPIResponse, Provider } from "../types";

export const getProviders = async (params: string) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<Provider[]>> =
      await externalApi.get(`/providers${params}`);

    const { data: providers } = data;

    return providers || [];
  } catch (error) {
    throw error instanceof ApiError
      ? error
      : new ApiError(
          500,
          `Failed to fetch providers: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
  }
};
