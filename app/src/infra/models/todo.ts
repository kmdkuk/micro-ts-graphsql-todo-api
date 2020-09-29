import mongoose from "mongoose";
import ITodoDocument from "./ITodoDocument";

const schema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    min: 2,
    max: 255,
  },
  description: {
    type: String,
    required: true,
    min: 2,
    max: 255,
  },
  isDone: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const TodoDb = mongoose.model<ITodoDocument>("Todo", schema);

export default TodoDb;
