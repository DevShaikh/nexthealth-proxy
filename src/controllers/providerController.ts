import { RequestHandler } from "express";

import { sendSuccessResponse } from "../utils/responseHandler";

import { GetProvidersInput } from "../validations/schemas/providerSchema";

import { toQueryParams } from "../utils";

import * as providerService from "../services/providerService";

export const getProviders: RequestHandler = async (req, res, next) => {
  try {
    const query = req.query as GetProvidersInput;
    const params = toQueryParams(query);

    const result = await providerService.getProviders(params);

    sendSuccessResponse(res, 200, result, "Providers fetched successful");
  } catch (err) {
    next(err);
  }
};
