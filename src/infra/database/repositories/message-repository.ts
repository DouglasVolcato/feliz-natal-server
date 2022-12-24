import { Message } from "../../../domain/entities/message.entity";
import { messageModel } from "../schemas/message-schema";
import { MessageRepositoryInterface } from "./abstract/message-repository-interface";

export class MessageRepository implements MessageRepositoryInterface {
  async create(messageBody: Message): Promise<Message> {
    return await messageModel.create(messageBody);
  }

  async getAll(): Promise<Message[]> {
    return await messageModel
      .find()
      .select("-authorIp")
      .select("-_id")
      .select("-__v");
  }

  async findByIp(userIp: string): Promise<Message | null> {
    return await messageModel.findOne({ authorIp: userIp });
  }
}
