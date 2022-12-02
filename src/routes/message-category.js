import express from "express";

import { createMessageCategory, getAllMessageCategories } from "../controllers";

const router = express.Router();

router.get("", getAllMessageCategories);
router.post("", createMessageCategory);

export default router;
