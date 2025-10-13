import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";
import { createUserValidation } from "../validators/user.validator.js";

const router = Router();

router.post("/create", createUserValidation, createUser);

export default router;
