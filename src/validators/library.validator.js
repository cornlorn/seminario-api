import { body } from "express-validator";

export const requiredField = (field, message) => {
    if (Array.isArray(field)) {
        return field.map((f) =>
            body(f)
                .exists()
                .withMessage(message || `${f} is required`),
        );
    }
    return body(field)
        .exists()
        .withMessage(message || `${field} is required`);
};

export const stringField = (field, message) => {
    if (Array.isArray(field)) {
        return field.map((f) =>
            body(f)
                .isString()
                .withMessage(message || `${f} must be a string`),
        );
    }
    return body(field)
        .isString()
        .withMessage(message || `${field} must be a string`);
};

export const notEmptyField = (field, message) => {
    if (Array.isArray(field)) {
        return field.map((f) =>
            body(f)
                .notEmpty()
                .withMessage(message || `${f} cannot be empty`),
        );
    }
    return body(field)
        .notEmpty()
        .withMessage(message || `${field} cannot be empty`);
};

export const numericField = (field, message) => {
    if (Array.isArray(field)) {
        return field.map((f) =>
            body(f)
                .isNumeric()
                .withMessage(message || `${f} must be a number`),
        );
    }
    return body(field)
        .isNumeric()
        .withMessage(message || `${field} must be a number`);
};
