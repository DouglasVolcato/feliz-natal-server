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
exports.MessageController = void 0;
class MessageController {
    constructor(createMessageUseCase, getAllMessagesUseCase) {
        this.createMessageUseCase = createMessageUseCase;
        this.getAllMessagesUseCase = getAllMessagesUseCase;
    }
    create(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = request;
                const authorIp = body.ip;
                const createdMessage = yield this.createMessageUseCase.execute(Object.assign(Object.assign({}, body), { authorIp }));
                if (createdMessage) {
                    return {
                        body: "Message created!",
                        error: false,
                        statusCode: 201,
                    };
                }
                else {
                    return {
                        body: "Error creating message.",
                        error: true,
                        statusCode: 400,
                    };
                }
            }
            catch (error) {
                return {
                    body: error,
                    error: true,
                    statusCode: 400,
                };
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const foundMessages = yield this.getAllMessagesUseCase.execute();
                if (foundMessages) {
                    return {
                        body: foundMessages,
                        error: false,
                        statusCode: 200,
                    };
                }
                else {
                    return {
                        body: "Error creating message.",
                        error: true,
                        statusCode: 400,
                    };
                }
            }
            catch (error) {
                return {
                    body: error,
                    error: true,
                    statusCode: 400,
                };
            }
        });
    }
}
exports.MessageController = MessageController;
