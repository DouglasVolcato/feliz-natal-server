import { Message } from "../../../../domain/entities/message.entity";

export interface MessageRepositoryInterface {
  create(messageBody: Message): Promise<Message>;
  getAll(): Promise<Message[]>;
  findByIp(userIp: string): Promise<Message | null>;
}
