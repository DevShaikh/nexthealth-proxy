import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import ApiError from "../utils/ApiError";

import { NextHealthAPIResponse, Patient } from "../types";

import { CreatePatientBodyInput } from "../validations/schemas/patientSchema";

export const getPatients = async (params: string) => {
  try {
    const {
      data,
    }: AxiosResponse<NextHealthAPIResponse<{ patients: Patient[] }>> =
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

export const createPatient = async (
  params: string,
  payload: CreatePatientBodyInput
) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<Patient>> =
      await externalApi.post(`/patients${params}`, payload);

    const { data: patients } = data;

    return patients;
  } catch (error) {
    throw error instanceof ApiError
      ? error
      : new ApiError(
          500,
          `Failed to create a patient: ${
            error instanceof Error ? error.message : "Unknown error"
          }`,
          false
        );
  }
};
