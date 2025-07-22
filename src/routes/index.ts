import { Router } from "express";

import authRoutes from "./authRoutes";
import locationRoutes from "./locationRoutes";
import providerRoutes from "./providerRoutes";
import appointmentRoutes from "./appointmentRoutes";

const router = Router();

// Welcome route
router.get("/", (_, res) => {
  res.json({ message: "Welcome to the Health Care Appointment API" });
});

router.use("/authenticates", authRoutes);

router.use("/locations", locationRoutes);

router.use("/providers", providerRoutes);

router.use("/appointment", appointmentRoutes);

export default router;
