import "dotenv/config";
import express from "express";
import morgan from "morgan";
import { database } from "./config/database.js";
import userRoutes from "./routes/user.route.js";
import libraryRoutes from "./routes/library.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(morgan("dev"));

app.use("/users", userRoutes);

app.use("/library", libraryRoutes);

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await database();
});
