import mongoose from "mongoose";
import mockTodos from "../mocks/todos.json";
import { Todo } from "../models/todo";
import { TodoRepository } from "../repositories/todos";

let todoRepo: TodoRepository | null = null;
export const todos = async (
  _parent: any,
  _args: any,
  { dbConn }: { dbConn: mongoose.Connection }
): Promise<Todo[]> => {
  if (todoRepo == null) {
    todoRepo = new TodoRepository(dbConn);
  }
  return todoRepo.gets();
};

export const createTodo = async (
  _: any,
  description: String,
  { dbConn }: { dbConn: mongoose.Connection }
): Promise<Todo> => {
  if (todoRepo == null) {
    todoRepo = new TodoRepository(dbConn);
  }
  return todoRepo.create(description);
};
