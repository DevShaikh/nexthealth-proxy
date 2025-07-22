import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import ApiError from "../utils/ApiError";

import { NextHealthAPIResponse, Patient } from "../types";

export const getPatients = async (params: string) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<Patient[]>> =
      await externalApi.get(`/patients${params}`);

    const { data: patients } = data;

    return patients || [];
  } catch (error) {
    throw error instanceof ApiError
      ? error
      : new ApiError(
          500,
          `Failed to fetch patients: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
  }
};
