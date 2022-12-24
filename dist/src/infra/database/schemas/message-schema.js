"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const messageSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true },
    message: { type: String, required: true },
    author: { type: String, required: true },
    authorIp: { type: String, required: true, unique: true },
});
exports.messageModel = mongoose_1.default.model("Message", messageSchema);
