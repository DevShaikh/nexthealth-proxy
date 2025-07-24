import { Router } from "express";

import validateRequest from "../middleware/zodValidation";
import { GetProvidersSchema } from "../validations/schemas/providerSchema";

import * as providerController from "../controllers/providerController";

const router = Router();

router.get(
  "/",
  validateRequest({ query: GetProvidersSchema }),
  providerController.getProviders
);

export default router;
