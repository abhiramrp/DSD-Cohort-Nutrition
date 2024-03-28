import "reflect-metadata";
import { DataSource } from "typeorm";

import { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD } from "./config";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST || "localhost",
    port: DB_PORT || 5432,
    username: DB_USERNAME,
    password: DB_PASSWORD, 
    database: DB_NAME,

    migrations: [__dirname + "/migration/*.ts"],
    entities: ["/entity/*.ts"]
})