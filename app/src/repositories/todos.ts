import { Todo } from "../models/todo";
import TodoDb from "../infra/models/todo";
import ITodoDocument from "../infra/models/ITodoDocument";

export class TodoRepository {
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
    await todo.save((err: any, todo: ITodoDocument) => {
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

  async complete(id: String): Promise<Todo> {
    const todo = await TodoDb.findById(id);
    if (!todo) {
      return {
        id: "",
        description: "not found todo",
        isDone: false,
      };
    }
    todo.isDone = true;
    await todo.save((err: any, todo: ITodoDocument) => {
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

  async update(args: { id: String; description: String }): Promise<Todo> {
    const todo = await TodoDb.findById(args.id);
    if (!todo) {
      return {
        id: "",
        description: "not found todo",
        isDone: false,
      };
    }
    todo.description = args.description;

    await todo.save((err: any, todo: ITodoDocument) => {
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
