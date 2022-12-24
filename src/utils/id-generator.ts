import { v4 as uuid } from "uuid";
import { IdGeneratorInterface } from "./abstract/id-generator-interface";

export class IdGenerator implements IdGeneratorInterface {
  generate(): string {
    return uuid();
  }
}
