import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import ApiError from "../utils/ApiError";

import { Authenticate, NextHealthAPIResponse } from "../types";

export const authenticate = async () => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<Authenticate>> =
      await externalApi.post(`/authenticates`);

    const { data: auth } = data;

    return auth;
  } catch (error: any) {
    // This will directly pass the original error object to your middleware
    if (error.response && error.response.data) {
      throw {
        ...error.response.data,
        statusCode: error.response.status,
      };
    }

    throw error instanceof ApiError
      ? error
      : new ApiError(
          500,
          `Failed to authenticate: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
  }
};
