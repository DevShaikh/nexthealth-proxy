import { RequestHandler } from "express";

import { sendSuccessResponse } from "../utils/responseHandler";

import { GetLocationsInput } from "validations/schemas/locationSchema";

import { toQueryParams } from "../utils";

import * as locationService from "../services/locationService";

export const getLocations: RequestHandler = async (req, res, next) => {
  try {
    const query = req.query as GetLocationsInput;
    const params = toQueryParams(query);

    const result = await locationService.getLocations(params);

    sendSuccessResponse(res, 200, result, "Locations fetched successful");
  } catch (err) {
    next(err);
  }
};
