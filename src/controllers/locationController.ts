import { RequestHandler } from "express";

import ApiError from "../utils/ApiError";
import { sendSuccessResponse } from "../utils/responseHandler";

import * as locationService from "../services/locationService";

export const getLocations: RequestHandler = async (req, res, next) => {
  try {
    const { subdomain } = req.query as { subdomain?: string };

    if (!subdomain) {
      throw new ApiError(401, "Subdomain is required");
    }

    const result = await locationService.getLocations(subdomain);

    sendSuccessResponse(res, 200, result, "Locations fetched successful");
  } catch (err) {
    next(err);
  }
};
