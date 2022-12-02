import express from "express";

import { createUser, getAllUsers } from "../controllers";
import { validate } from "../middlewares";
import { createUserValidationSchema } from "../validations";

const router = express.Router();

router.get("", getAllUsers);
router.post("", validate(createUserValidationSchema), createUser);

export default router;
