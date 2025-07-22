import { RequestHandler } from "express";

import { sendSuccessResponse } from "../utils/responseHandler";

import * as authService from "../services/authService";

export const authenticate: RequestHandler = async (req, res, next) => {
  try {
    const result = await authService.authenticate();

    sendSuccessResponse(res, 200, result, "Authenticated!");
  } catch (err) {
    next(err);
  }
};
