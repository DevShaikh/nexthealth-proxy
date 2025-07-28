import { Router } from "express";

import validateRequest from "../middleware/zodValidation";

import {
  GetAppointmentTypesSchema,
  GetAppointmentSlotsSchema,
  CreateAppointmentSchema,
  CreateAppointmentQuerySchema,
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

router.post(
  "/",
  [
    validateRequest({ query: CreateAppointmentQuerySchema }),
    validateRequest({ body: CreateAppointmentSchema }),
  ],
  appointmentController.createAppointment
);

export default router;
