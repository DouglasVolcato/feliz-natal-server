"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageValidator = void 0;
class MessageValidator {
    constructor(idGenerator) {
        this.idGenerator = idGenerator;
    }
    validate(message) {
        if (!message.message) {
            throw new Error("Empty Message!");
        }
        else if (!message.author) {
            throw new Error("Empty Author!");
        }
        else if (!message.authorIp) {
            throw new Error("Empty AuthorIp!");
        }
        else {
            return {
                id: this.idGenerator.generate(),
                message: message.message,
                author: message.author,
                authorIp: message.authorIp,
            };
        }
    }
}
exports.MessageValidator = MessageValidator;
