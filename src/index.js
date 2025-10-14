import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { database } from "./config/database.js";
import userRoutes from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(morgan("dev"));

/**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 */

app.get("/health", (request, response) => {
    return response.json({ status: "ok" });
});

app.use("/users", userRoutes);

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await database();
});
