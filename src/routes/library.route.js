import { Router } from "express";
import {
    createAuthor,
    createBook,
    createGenre,
    viewBooks,
} from "../controllers/library.controller.js";
import { body } from "express-validator";

function requiredField(field, message) {
    return body(field)
        .notEmpty()
        .withMessage(message || `${field} is required`);
}

const router = Router();

router.post("/authors", [requiredField("name")], createAuthor);

router.post("/genres", [requiredField("name")], createGenre);

router.post(
    "/books",
    [requiredField("name"), requiredField("author"), requiredField("genre")],
    createBook,
);

router.get("/books", viewBooks);

export default router;
