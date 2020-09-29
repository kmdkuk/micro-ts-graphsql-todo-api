import mongoose from "mongoose";

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

const Todo = mongoose.model("Todo", schema);

export default Todo;
