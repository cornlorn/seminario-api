import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: "mysql",
    logging: false,
});

const database = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully");

        await sequelize.sync();
        console.log("Database synchronized successfully");
    } catch (error) {
        console.log("Unable to connect to the database:", error);
        process.exit(1);
    }
};

export { database, sequelize };
