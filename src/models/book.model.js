import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Book = sequelize.define(
    "Book",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, allowNull: false },
        author: { type: DataTypes.INTEGER, allowNull: false },
        genre: { type: DataTypes.INTEGER, allowNull: false },
    },
    { tableName: "books", timestamps: false },
);

export default Book;
