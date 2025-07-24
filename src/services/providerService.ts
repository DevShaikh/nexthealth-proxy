import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import { NextHealthAPIResponse, Provider } from "../types";
import { handleExternalAPIError } from "../utils/handleExternalAPIError";

export const getProviders = async (params: string) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<Provider[]>> =
      await externalApi.get(`/providers${params}`);

    const { data: providers } = data;

    return providers || [];
  } catch (error: unknown) {
    handleExternalAPIError(error, "Failed to fetch providers");
  }
};
