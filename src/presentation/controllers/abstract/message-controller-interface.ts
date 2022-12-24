import { Message } from "../../../domain/entities/message.entity";
import { HttpRequest } from "../../../domain/http/http-request";
import { HttpResponse } from "../../../domain/http/http-response";

export interface MessageControllerInterface {
  create(request: HttpRequest): Promise<HttpResponse>;
  getAll(): Promise<HttpResponse>;
}
