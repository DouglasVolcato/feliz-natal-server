import { Message } from "../../domain/entities/message.entity";
import { MessageRepositoryInterface } from "../../infra/database/repositories/abstract/message-repository-interface";
import { MessageValidator } from "../helpers/validators/messageValidator";

export class CreateMessageUseCase {
  constructor(
    private readonly messageRepository: MessageRepositoryInterface,
    private readonly messageValidator: MessageValidator
  ) {}

  async execute(messageBody: Message): Promise<boolean> {
    const message = this.messageValidator.validate(messageBody);
    const foundMessagesByIp = await this.messageRepository.findByIp(
      messageBody.authorIp
    );

    if (foundMessagesByIp) {
      throw new Error("Author already created a message!");
    }

    const createdMessage = await this.messageRepository.create(message);
    if (createdMessage.message) {
      return true;
    }
    return false;
  }
}
