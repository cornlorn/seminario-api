import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";
import { createUserValidation } from "../validators/user.validator.js";

const router = Router();

router.post("/create", createUserValidation, createUser);

router.get("/", getUsers);

export default router;
