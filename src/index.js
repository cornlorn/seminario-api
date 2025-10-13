import express from "express";

const app = express();

app.use(express.json());

/**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 */

app.get("/health", (request, response) => {
    return response.json({ status: "ok" });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
