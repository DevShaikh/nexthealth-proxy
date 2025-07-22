import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import { toQueryParams } from "../utils";
import ApiError from "../utils/ApiError";

import { AppointmentType, NextHealthAPIResponse } from "../types";
import {
  GetAppointmentSlotsInput,
  GetAppointmentTypesInput,
} from "../validations/schemas/appointmentSchema";

export const getAppointmentTypes = async ({
  subdomain,
  location_id,
}: GetAppointmentTypesInput) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<AppointmentType[]>> =
      await externalApi.get(
        `/appointment_types?subdomain=${subdomain}&location_id=${location_id}`
      );

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

export const getAppointmentSlots = async (params: GetAppointmentSlotsInput) => {
  try {
    const query = toQueryParams(params);
    const { data }: AxiosResponse<NextHealthAPIResponse<AppointmentType[]>> =
      await externalApi.get(`/appointment_slots${query}`);

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
