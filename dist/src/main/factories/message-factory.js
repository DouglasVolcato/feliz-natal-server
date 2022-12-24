"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMessageFactory = void 0;
const messageValidator_1 = require("../../data/helpers/validators/messageValidator");
const create_message_usecase_1 = require("../../data/usecases/create-message-usecase");
const getAll_messages_usecase_1 = require("../../data/usecases/getAll-messages-usecase");
const message_repository_1 = require("../../infra/database/repositories/message-repository");
const message_controller_1 = require("../../presentation/controllers/message-controller");
const id_generator_1 = require("../../utils/id-generator");
function makeMessageFactory() {
    const messageRepository = new message_repository_1.MessageRepository();
    const idGenerator = new id_generator_1.IdGenerator();
    const messageValidator = new messageValidator_1.MessageValidator(idGenerator);
    const getAllMessagesUseCase = new getAll_messages_usecase_1.GetAllMessagesUseCase(messageRepository);
    const createMessageUseCase = new create_message_usecase_1.CreateMessageUseCase(messageRepository, messageValidator);
    return new message_controller_1.MessageController(createMessageUseCase, getAllMessagesUseCase);
}
exports.makeMessageFactory = makeMessageFactory;
