import * as dotenv from 'dotenv'; 

dotenv.config();

export const PORT = Number(process.env.PORT) || 3000;

export const DB_HOST = String(process.env.DB_HOST);
export const DB_PORT = Number(process.env.DB_PORT);
export const DB_NAME = String(process.env.DB_NAME);
export const DB_USERNAME = String(process.env.DB_USERNAME);
export const DB_PASSWORD = String(process.env.DB_PASSWORD);