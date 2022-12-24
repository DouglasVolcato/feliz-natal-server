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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRepository = void 0;
const message_schema_1 = require("../schemas/message-schema");
class MessageRepository {
    create(messageBody) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield message_schema_1.messageModel.create(messageBody);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield message_schema_1.messageModel
                .find()
                .select("-authorIp")
                .select("-_id")
                .select("-__v");
        });
    }
    findByIp(userIp) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield message_schema_1.messageModel.findOne({ authorIp: userIp });
        });
    }
}
exports.MessageRepository = MessageRepository;
