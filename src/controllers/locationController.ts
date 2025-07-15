import { RequestHandler } from "express";

import ApiError from "../utils/ApiError";
import { sendSuccessResponse } from "../utils/responseHandler";

import { GetLocationsInput } from "validations/schemas/locationSchema";

import * as locationService from "../services/locationService";

export const getLocations: RequestHandler = async (req, res, next) => {
  try {
    const { subdomain } = req.query as GetLocationsInput;

    const result = await locationService.getLocations(subdomain);

    sendSuccessResponse(res, 200, result, "Locations fetched successful");
  } catch (err) {
    next(err);
  }
};
