import Role from "../models/role.model.js";
import User from "../models/user.model.js";

/**
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */

export const createUser = async (request, response) => {
    try {
        let { name, role } = request.body;

        const errors = [];

        if (!name) errors.push("Name is required");

        if (!role) errors.push("Role is required");

        if (typeof name !== "string") errors.push("Name must be a string");

        if (typeof role !== "string") errors.push("Role must be a string");

        if (errors.length > 0) return response.status(400).json(errors);

        const roleCheck = await Role.findOne({ where: { name: role } });

        if (!roleCheck)
            return response.status(404).json({ error: "Role not found" });

        const user = await User.create({
            name,
            role: roleCheck.id,
        });

        response.status(201).json({ message: "User created successfully" });
    } catch (error) {
        response.status(500).json({ error: "Internal server error" });
    }
};
