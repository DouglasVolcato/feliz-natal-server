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
exports.CreateMessageUseCase = void 0;
class CreateMessageUseCase {
    constructor(messageRepository, messageValidator) {
        this.messageRepository = messageRepository;
        this.messageValidator = messageValidator;
    }
    execute(messageBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = this.messageValidator.validate(messageBody);
            const foundMessagesByIp = yield this.messageRepository.findByIp(messageBody.authorIp);
            if (foundMessagesByIp) {
                throw new Error("Author already created a message!");
            }
            const createdMessage = yield this.messageRepository.create(message);
            if (createdMessage.message) {
                return true;
            }
            return false;
        });
    }
}
exports.CreateMessageUseCase = CreateMessageUseCase;
