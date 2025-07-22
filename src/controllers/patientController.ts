import { RequestHandler } from "express";

import { sendSuccessResponse } from "../utils/responseHandler";

import { GetPatientsSchema } from "../validations/schemas/patientSchema";

import * as patientService from "../services/patientService";
import { toQueryParams } from "../utils";

export const getPatients: RequestHandler = async (req, res, next) => {
  try {
    const query = GetPatientsSchema.parse(req.query);
    const params = toQueryParams(query);

    const result = await patientService.getPatients(params);

    sendSuccessResponse(res, 200, result, "Patients fetched successful");
  } catch (err) {
    next(err);
  }
};
