import { Message } from "../../../domain/entities/message.entity";
import { IdGeneratorInterface } from "../../../utils/abstract/id-generator-interface";

export class MessageValidator {
  constructor(private readonly idGenerator: IdGeneratorInterface) {}

  validate(message: Message): Message {
    if (!message.message) {
      throw new Error("Empty Message!");
    } else if (!message.author) {
      throw new Error("Empty Author!");
    } else if (!message.authorIp) {
      throw new Error("Empty AuthorIp!");
    } else {
      return {
        id: this.idGenerator.generate(),
        message: message.message,
        author: message.author,
        authorIp: message.authorIp,
      };
    }
  }
}
