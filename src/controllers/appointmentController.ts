import { RequestHandler } from "express";

import { sendSuccessResponse } from "../utils/responseHandler";

import {
  GetAppointmentSlotsInput,
  GetAppointmentTypesInput,
} from "../validations/schemas/appointmentSchema";

import * as appointmentService from "../services/appointmentService";
import { toQueryParams } from "../utils";

export const getAppointmentTypes: RequestHandler = async (req, res, next) => {
  try {
    const query = req.query as GetAppointmentTypesInput;
    const params = toQueryParams(query);

    const result = await appointmentService.getAppointmentTypes(params);

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
    const query = req.query as unknown as GetAppointmentSlotsInput;
    const params = toQueryParams(query);

    const result = await appointmentService.getAppointmentSlots(params);

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
