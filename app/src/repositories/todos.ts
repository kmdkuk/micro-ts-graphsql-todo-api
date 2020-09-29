import mongoose from "mongoose";
import DbTodo from "../infra/models/todo";
import mockTodos from "../mocks/todos.json";
import { Todo } from "../models/todo";

export class TodoRepository {
  dbConn: mongoose.Connection;

  constructor(dbConn: mongoose.Connection) {
    this.dbConn = dbConn;
  }

  async gets(): Promise<Todo[]> {
    return mockTodos;
  }

  async create(description: String): Promise<Todo> {
    const todo = await DbTodo.create({
      description: description,
      isDone: false,
    });
    const result: Todo = {
      id: todo.id,
      description: todo.description,
      isDone: todo.isDone,
    };
    return result;
  }
}
