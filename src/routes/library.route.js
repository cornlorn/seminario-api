import { Router } from "express";
import {
    createAuthor,
    createBook,
    createGenre,
    viewBooks,
} from "../controllers/library.controller.js";

import {
    requiredField,
    stringField,
    numericField,
} from "../validators/library.validator.js";

const router = Router();

router.post(
    "/authors",
    requiredField(["name"]),
    stringField(["name"]),
    createAuthor,
);

router.post(
    "/genres",
    requiredField(["name"]),
    stringField(["name"]),
    createGenre,
);

router.post(
    "/books",
    requiredField(["name", "author", "genre"]),
    stringField("name"),
    numericField(["author", "genre"]),
    createBook,
);

router.get("/books", viewBooks);

export default router;
