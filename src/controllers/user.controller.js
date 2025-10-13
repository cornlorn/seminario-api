import { validationResult } from "express-validator";
import Role from "../models/role.model.js";
import User from "../models/user.model.js";

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */

export const createUser = async (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response
            .status(400)
            .json({ errors: errors.array().map((error) => error.msg) });
    }

    try {
        let { name, role } = request.body;

        const roleExists = await Role.findByPk(role);

        if (!roleExists) {
            return response.status(404).json({ error: "Role not found" });
        }

        await User.create({ name, role });

        return response
            .status(201)
            .json({ message: "User created successfully" });
    } catch (error) {
        console.log("Unable to create user:", error);
        response.status(500).json({ error: "Internal server error" });
    }
};
