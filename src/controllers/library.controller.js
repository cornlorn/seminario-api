import { validationResult } from "express-validator";
import Author from "../models/author.model.js";
import Book from "../models/book.model.js";
import Genre from "../models/genre.model.js";

Book.belongsTo(Author, { foreignKey: "author" });
Book.belongsTo(Genre, { foreignKey: "genre" });
Author.hasMany(Book, { foreignKey: "author" });
Genre.hasMany(Book, { foreignKey: "genre" });

/**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 */

export const createAuthor = async (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({
            errors: errors
                .array()
                .map((err) => ({ msg: err.msg, param: err.param })),
        });
    }

    try {
        const { name } = request.body;

        const author = await Author.create({ name });

        return response.status(201).json(author);
    } catch (error) {
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

/**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 */

export const createGenre = async (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({
            errors: errors
                .array()
                .map((err) => ({ msg: err.msg, param: err.param })),
        });
    }

    try {
        const { name } = request.body;

        const genre = await Genre.create({ name });

        return response.status(201).json(genre);
    } catch (error) {
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

/**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 */

export const createBook = async (request, response) => {
    const errors = validationResult(request);

    if (!errors.isEmpty()) {
        return response.status(400).json({
            errors: errors
                .array()
                .map((err) => ({ msg: err.msg, param: err.param })),
        });
    }

    try {
        const { name, author, genre } = request.body;

        const authorExists = await Author.findByPk(author);
        if (!authorExists) {
            return response
                .status(400)
                .json({ error: "Author does not exist" });
        }

        const genreExists = await Genre.findByPk(genre);
        if (!genreExists) {
            return response.status(400).json({ error: "Genre does not exist" });
        }

        const book = await Book.create({ name, author, genre });

        return response.status(201).json({
            id: book.id,
            name: book.name,
            author: authorExists.name,
            genre: genreExists.name,
        });
    } catch (error) {
        return response.status(500).json({ error: "Internal Server Error" });
    }
};

/**
 * @param {import("express").Request} request
 * @param {import("express").Response} response
 */

export const viewBooks = async (request, response) => {
    try {
        const books = await Book.findAll({
            include: [
                { model: Author, attributes: ["name"] },
                { model: Genre, attributes: ["name"] },
            ],
            attributes: ["id", "name"],
        });

        const result = books.map((book) => ({
            id: book.id,
            name: book.name,
            author: book.Author?.name || null,
            genre: book.Genre?.name || null,
        }));

        return response.status(200).json(result);
    } catch (error) {
        return response.status(500).json({ error: "Internal Server Error" });
    }
};
