import express, { Express } from "express";
import dotenv from "dotenv";
import { BACKEND_URL } from "@repo/common/config";

console.log(BACKEND_URL);

dotenv.config();

const PORT = process.env.PORT;

const app: Express = express();

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
