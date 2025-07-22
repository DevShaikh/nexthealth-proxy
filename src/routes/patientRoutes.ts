import { Router } from "express";

import validateRequest from "../middleware/zodValidation";
import { GetPatientsSchema } from "../validations/schemas/patientSchema";

import * as patientController from "../controllers/patientController";

const router = Router();

router.get(
  "/",
  validateRequest({ query: GetPatientsSchema }),
  patientController.getPatients
);

export default router;
