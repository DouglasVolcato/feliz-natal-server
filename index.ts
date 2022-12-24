import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { MongoDbConnection } from "./src/infra/database/connection/connect";
import { makeMessageFactory } from "./src/main/factories/message-factory";
import { EnvAdapter } from "./src/utils/envAdapter";

config();
MongoDbConnection.connectDb();

const message = makeMessageFactory();
const app = express();
app.use(express.json());
app.use(cors());
app.set("trust proxy", true);

app.post("/message/create", async (req, res) => {
  const response = await message.create({ ...req.body, ip: req.ip });
  res
    .status(response.statusCode)
    .send({ body: response.body, error: response.error });
});

app.get("/message/get-all", async (req, res) => {
  const response = await message.getAll();
  res
    .status(response.statusCode)
    .send({ body: response.body, error: response.error });
});

app.listen(new EnvAdapter().port());
