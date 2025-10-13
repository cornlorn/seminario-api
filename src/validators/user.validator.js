import { body } from "express-validator";

export const createUserValidation = [
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
];
