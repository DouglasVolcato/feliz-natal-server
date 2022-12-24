import { MessageValidator } from "../../data/helpers/validators/messageValidator";
import { CreateMessageUseCase } from "../../data/usecases/create-message-usecase";
import { GetAllMessagesUseCase } from "../../data/usecases/getAll-messages-usecase";
import { MessageRepository } from "../../infra/database/repositories/message-repository";
import { MessageControllerInterface } from "../../presentation/controllers/abstract/message-controller-interface";
import { MessageController } from "../../presentation/controllers/message-controller";
import { IdGenerator } from "../../utils/id-generator";

export function makeMessageFactory(): MessageControllerInterface {
  const messageRepository = new MessageRepository();
  const idGenerator = new IdGenerator();
  const messageValidator = new MessageValidator(idGenerator);

  const getAllMessagesUseCase = new GetAllMessagesUseCase(messageRepository);
  const createMessageUseCase = new CreateMessageUseCase(
    messageRepository,
    messageValidator
  );

  return new MessageController(createMessageUseCase, getAllMessagesUseCase);
}
