import express from "express";

import { validate } from "../middlewares";
import { getAllLogs, createLog } from "../controllers";
import { createLogValidationSchema } from "../validations";

const router = express.Router();

router.get("", getAllLogs);
router.post("", validate(createLogValidationSchema), createLog);

export default router;
