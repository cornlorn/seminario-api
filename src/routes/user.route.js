import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";
import { body } from "express-validator";

const router = Router();

router.post(
    "/create",
    body("name")
        .exists()
        .withMessage("Name is required")
        .isString()
        .withMessage("Name must be a string")
        .notEmpty()
        .withMessage("Name cannot be empty"),

    body("role")
        .exists()
        .withMessage("Role is required")
        .isInt()
        .withMessage("Role must be an integer")
        .notEmpty()
        .withMessage("Role cannot be empty"),
    createUser,
);

export default router;
