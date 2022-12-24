import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  message: { type: String, required: true },
  author: { type: String, required: true },
  authorIp: { type: String, required: true, unique: true },
});

export const messageModel = mongoose.model("Message", messageSchema);
