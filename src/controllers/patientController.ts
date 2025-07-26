import { RequestHandler } from "express";

import { sendSuccessResponse } from "../utils/responseHandler";

import {
  CreatePatientBodyInput,
  CreatePatientParamsInput,
  GetPatientsInput,
} from "../validations/schemas/patientSchema";

import { toQueryParams } from "../utils";
import ApiError from "../utils/ApiError";

import * as patientService from "../services/patientService";

export const getPatients: RequestHandler = async (req, res, next) => {
  try {
    const query = req.query as GetPatientsInput;
    const params = toQueryParams(query);

    const result = await patientService.getPatients(params);

    sendSuccessResponse(res, 200, result, "Patients fetched successful");
  } catch (err) {
    next(err);
  }
};

export const createPatient: RequestHandler = async (req, res, next) => {
  try {
    const query = req.query as CreatePatientParamsInput;
    const params = toQueryParams(query);

    const payload = req.body as CreatePatientBodyInput;

    const get_patients_params = toQueryParams({
      ...query,
      name: `${payload.patient.first_name} ${payload.patient.last_name}`,
      date_of_birth: payload.patient.bio.date_of_birth,
    });

    const patients = await patientService.getPatients(get_patients_params);

    if (patients.length) {
      throw new ApiError(409, "Patient already exists");
    }

    const result = await patientService.createPatient(params, payload);

    sendSuccessResponse(res, 200, result, "Patients created successful");
  } catch (err) {
    next(err);
  }
};
