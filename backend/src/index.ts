import express, { Express, Request, Response } from "express";
import cors from "cors"; 
import bodyParser from "body-parser";

import { supabase } from "./supabase";
import { PORT } from './config';


/*
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })
*/

const app: Express = express();
app.use(cors<Request>());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/api", (req: Request, res: Response) => {
  res.json({message: "Hello NesafxtJS from Express"});
});

app.get('/api/users', async (req: Request, res: Response) => {
  const {data, error} = await supabase.from('User').select();
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});