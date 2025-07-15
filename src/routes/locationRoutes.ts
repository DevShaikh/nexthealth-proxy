import { Router } from "express";

import validateRequest from "../utils/zod_validation";
import { GetLocationsSchema } from "../validations/schemas/locationSchema";

import * as locationController from "../controllers/locationController";

const router = Router();

router.get(
  "/",
  validateRequest({ query: GetLocationsSchema }),
  locationController.getLocations
);

export default router;
