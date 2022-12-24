import { Message } from "../../domain/entities/message.entity";
import { MessageRepositoryInterface } from "../../infra/database/repositories/abstract/message-repository-interface";

export class GetAllMessagesUseCase {
  constructor(private readonly messageRepository: MessageRepositoryInterface) {}

  async execute(): Promise<Message[]> {
    const foundMessages = await this.messageRepository.getAll();
    return foundMessages;
  }
}
