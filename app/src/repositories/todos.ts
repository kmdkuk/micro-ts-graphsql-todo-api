import mongoose from "mongoose";
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
}
