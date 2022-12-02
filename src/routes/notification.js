import express from "express";

import { createNotification, getAllNotifications } from "../controllers";

const router = express.Router();

router.get("", getAllNotifications);
router.post("", createNotification);

export default router;
