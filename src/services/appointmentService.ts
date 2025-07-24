import { AxiosResponse } from "axios";
import externalApi from "../utils/externalApi";

import { Appointment, AppointmentType, NextHealthAPIResponse } from "../types";

import { CreateAppointmentInput } from "../validations/schemas/appointmentSchema";
import { handleExternalAPIError } from "../utils/handleExternalAPIError";

export const getAppointmentTypes = async (params: string) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<AppointmentType[]>> =
      await externalApi.get(`/appointment_types${params}`);

    const { data: appointmentTypes } = data;

    return appointmentTypes || [];
  } catch (error: unknown) {
    handleExternalAPIError(error, "Failed to fetch appointment types");
  }
};

export const getAppointmentSlots = async (params: string) => {
  try {
    const { data }: AxiosResponse<NextHealthAPIResponse<AppointmentType[]>> =
      await externalApi.get(`/appointment_slots${params}`);

    const { data: appointmentSlots } = data;

    return appointmentSlots || [];
  } catch (error: unknown) {
    handleExternalAPIError(error, "Failed to fetch appointment slots");
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
  } catch (error: unknown) {
    handleExternalAPIError(error, "Failed to create an appointment");
  }
};
