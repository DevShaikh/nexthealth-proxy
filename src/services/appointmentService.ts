import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import ApiError from "../utils/ApiError";

import { Appointment, AppointmentType, NextHealthAPIResponse } from "../types";

import { CreateAppointmentInput } from "../validations/schemas/appointmentSchema";

export const getAppointmentTypes = async (params: string) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<AppointmentType[]>> =
      await externalApi.get(`/appointment_types${params}`);

    const { data: appointmentTypes } = data;

    return appointmentTypes || [];
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
          `Failed to fetch appointment slots: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
  }
};

export const createAppointment = async (
  params: string,
  payload: CreateAppointmentInput
) => {
  try {
    const {
      data,
    }: AxiosResponse<NextHealthAPIResponse<{ appt: Appointment }>> =
      await externalApi.post(`/appointments${params}`, {
        appt: payload,
      });

    const { data: appointment } = data;

    return appointment || {};
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
          `Failed to book an appointment: ${
            error instanceof Error ? error.message : "Unknown error"
          }`
        );
  }
};
