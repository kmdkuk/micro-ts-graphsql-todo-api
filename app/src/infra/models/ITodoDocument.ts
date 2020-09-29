import mongoose from "mongoose";
export default interface ITodoDocument extends mongoose.Document {
  id: String;
  description: String;
  isDone: boolean;
}
