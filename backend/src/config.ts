import * as dotenv from 'dotenv'; 

dotenv.config();

export const PORT = Number(process.env.PORT) || 8080;

export const DATABASE_URL = String(process.env.DATABASE_URL);
export const DATABASE_KEY = String(process.env.DATABASE_KEY);