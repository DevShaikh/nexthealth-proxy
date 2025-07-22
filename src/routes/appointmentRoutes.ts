import { Router } from "express";

import validateRequest from "../middleware/zodValidation";

import {
  GetAppointmentTypesSchema,
  GetAppointmentSlotsSchema,
} from "../validations/schemas/appointmentSchema";

import * as appointmentController from "../controllers/appointmentController";

const router = Router();

router.get(
  "/types",
  validateRequest({ query: GetAppointmentTypesSchema }),
  appointmentController.getAppointmentTypes
);

router.get(
  "/slots",
  validateRequest({ query: GetAppointmentSlotsSchema }),
  appointmentController.getAppointmentSlots
);

export default router;
