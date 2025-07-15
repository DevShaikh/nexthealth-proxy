import { Router } from "express";

import validateRequest from "../middleware/zodValidation";
import { GetProvidersSchema } from "../validations/schemas/providerSchema";

import * as providerController from "../controllers/providerController";

const router = Router();

// GET 'https://nexhealth.info/providers?subdomain=test&&location_id=75&requestable=true&page=1&per_page=2'

router.get(
  "/",
  validateRequest({ query: GetProvidersSchema }),
  providerController.getProviders
);

export default router;
