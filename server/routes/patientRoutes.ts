import { Router } from "express";

import validateRequest from "../middleware/zodValidation";
import {
  CreatePatientParamsSchema,
  CreatePatientSchema,
  GetPatientsSchema,
} from "../validations/schemas/patientSchema";

import * as patientController from "../controllers/patientController";

const router = Router();

router.get("/", validateRequest({ query: GetPatientsSchema }), patientController.getPatients);

router.post(
  "/",
  [
    validateRequest({ query: CreatePatientParamsSchema }),
    validateRequest({ body: CreatePatientSchema }),
  ],
  patientController.createPatient
);

export default router;
