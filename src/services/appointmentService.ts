import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import ApiError from "../utils/ApiError";

import { AppointmentType, NextHealthAPIResponse } from "../types";

export const getAppointmentTypes = async (params: string) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<AppointmentType[]>> =
      await externalApi.get(`/appointment_types${params}`);

    const { data: appointmentTypes } = data;

    return appointmentTypes || [];
  } catch (error: any) {
    throw error instanceof ApiError
      ? error
      : new ApiError(
          500,
          `Failed to fetch appointment types: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
  }
};

export const getAppointmentSlots = async (params: string) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<AppointmentType[]>> =
      await externalApi.get(`/appointment_slots${params}`);

    const { data: appointmentSlots } = data;

    return appointmentSlots || [];
  } catch (error: any) {
    throw error instanceof ApiError
      ? error
      : new ApiError(
          500,
          `Failed to fetch appointment slots: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
  }
};
