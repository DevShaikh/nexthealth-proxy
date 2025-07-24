import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import { NextHealthAPIResponse, Patient } from "../types";

import { CreatePatientBodyInput } from "../validations/schemas/patientSchema";
import { handleExternalAPIError } from "../utils/handleExternalAPIError";

export const getPatients = async (params: string) => {
  try {
    const {
      data,
    }: AxiosResponse<NextHealthAPIResponse<{ patients: Patient[] }>> =
      await externalApi.get(`/patients${params}`);

    const { data: patients } = data;

    return patients || [];
  } catch (error: unknown) {
    handleExternalAPIError(error, "Failed to fetch patients");
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
  } catch (error: unknown) {
    handleExternalAPIError(error, "Failed to create patient");
  }
};
