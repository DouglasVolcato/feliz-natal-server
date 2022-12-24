"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const connect_1 = require("./src/infra/database/connection/connect");
const message_factory_1 = require("./src/main/factories/message-factory");
const envAdapter_1 = require("./src/utils/envAdapter");
(0, dotenv_1.config)();
connect_1.MongoDbConnection.connectDb();
const message = (0, message_factory_1.makeMessageFactory)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.set("trust proxy", true);
app.post("/message/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield message.create(Object.assign(Object.assign({}, req.body), { ip: req.ip }));
    res
        .status(response.statusCode)
        .send({ body: response.body, error: response.error });
}));
app.get("/message/get-all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield message.getAll();
    res
        .status(response.statusCode)
        .send({ body: response.body, error: response.error });
}));
app.listen(new envAdapter_1.EnvAdapter().port());
