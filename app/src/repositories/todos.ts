import mongoose from "mongoose";
import mockTodos from "../mocks/todos.json";
import { Todo } from "../models/todo";
import TodoDb from "../infra/models/todo";
import ITodoDocument from "../infra/models/ITodoDocument";

export class TodoRepository {
  dbConn: mongoose.Connection;

  constructor(dbConn: mongoose.Connection) {
    this.dbConn = dbConn;
  }

  async gets(): Promise<Todo[]> {
    return TodoDb.find().then((todos: ITodoDocument[]) => {
      return todos.map(
        (item: ITodoDocument): Todo => {
          return {
            id: item.id,
            description: item.description,
            isDone: item.isDone,
          };
        }
      );
    });
  }

  async create(description: String): Promise<Todo> {
    console.log("todoRepo.create " + description);
    const todo = new TodoDb({
      description: description,
      isDone: false,
    });
    todo.save((err: any, todo: ITodoDocument) => {
      if (err) return console.error("error: " + err);
      console.log("todo: " + todo);
    });
    const result: Todo = {
      id: todo.id,
      description: todo.description,
      isDone: todo.isDone,
    };
    return result;
  }
}
