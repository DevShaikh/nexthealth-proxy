import { RequestHandler } from "express";

import { sendSuccessResponse } from "../utils/responseHandler";

import {
  GetAppointmentSlotsSchema,
  GetAppointmentTypesSchema,
} from "../validations/schemas/appointmentSchema";

import * as appointmentService from "../services/appointmentService";

export const getAppointmentTypes: RequestHandler = async (req, res, next) => {
  try {
    const query = GetAppointmentTypesSchema.parse(req.query);

    const result = await appointmentService.getAppointmentTypes(query);

    sendSuccessResponse(
      res,
      200,
      result,
      "Appointment Types fetched successful"
    );
  } catch (err) {
    next(err);
  }
};

export const getAppointmentSlots: RequestHandler = async (req, res, next) => {
  try {
    const query = GetAppointmentSlotsSchema.parse(req.query);

    const result = await appointmentService.getAppointmentSlots(query);

    sendSuccessResponse(
      res,
      200,
      result,
      "Appointment Slots fetched successful"
    );
  } catch (err) {
    next(err);
  }
};
