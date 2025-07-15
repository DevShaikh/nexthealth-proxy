import { Router } from "express";

import locationRoutes from "./locationRoutes";

const router = Router();

// Welcome route
router.get("/", (_, res) => {
  res.json({ message: "Welcome to the Health Care Appointment API" });
});

router.use("/locations", locationRoutes);

export default router;
