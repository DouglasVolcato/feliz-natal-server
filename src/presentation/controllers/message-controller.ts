import { CreateMessageUseCase } from "../../data/usecases/create-message-usecase";
import { GetAllMessagesUseCase } from "../../data/usecases/getAll-messages-usecase";
import { HttpRequest } from "../../domain/http/http-request";
import { HttpResponse } from "../../domain/http/http-response";
import { MessageControllerInterface } from "./abstract/message-controller-interface";

export class MessageController implements MessageControllerInterface {
  constructor(
    private readonly createMessageUseCase: CreateMessageUseCase,
    private readonly getAllMessagesUseCase: GetAllMessagesUseCase
  ) {}

  async create(request: HttpRequest): Promise<HttpResponse> {
    try {
      const body = request;
      const authorIp = body.ip;
      const createdMessage = await this.createMessageUseCase.execute({
        ...body,
        authorIp,
      });
      if (createdMessage) {
        return {
          body: "Message created!",
          error: false,
          statusCode: 201,
        };
      } else {
        return {
          body: "Error creating message.",
          error: true,
          statusCode: 400,
        };
      }
    } catch (error) {
      return {
        body: error,
        error: true,
        statusCode: 400,
      };
    }
  }
  async getAll(): Promise<HttpResponse> {
    try {
      const foundMessages = await this.getAllMessagesUseCase.execute();
      if (foundMessages) {
        return {
          body: foundMessages,
          error: false,
          statusCode: 200,
        };
      } else {
        return {
          body: "Error creating message.",
          error: true,
          statusCode: 400,
        };
      }
    } catch (error) {
      return {
        body: error,
        error: true,
        statusCode: 400,
      };
    }
  }
}
