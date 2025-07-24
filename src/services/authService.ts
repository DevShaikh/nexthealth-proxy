import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import { Authenticate, NextHealthAPIResponse } from "../types";
import { handleExternalAPIError } from "../utils/handleExternalAPIError";

export const authenticate = async () => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<Authenticate>> =
      await externalApi.post(`/authenticates`);

    const { data: auth } = data;

    return auth;
  } catch (error: unknown) {
    handleExternalAPIError(error, "Failed to authenticate");
  }
};
