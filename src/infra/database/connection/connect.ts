import mongoose from "mongoose";
import { EnvAdapter } from "../../../utils/envAdapter";

export class MongoDbConnection {
  static async connectDb() {
    mongoose.set("strictQuery", false);
    await mongoose
      .connect(new EnvAdapter().mongoUrl())
      .then(() => console.log("Connected to MongoDB"))
      .catch((error) => console.log("Error: " + error));
  }
}
