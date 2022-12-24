import { EnvAdapterInterface } from "./abstract/env-adapter-interface";

export class EnvAdapter implements EnvAdapterInterface {
  static mongoUrl: any;
  port() {
    return process.env.PORT || "3000";
  }
  mongoUrl() {
    return process.env.MONGO_URL || "";
  }
}
