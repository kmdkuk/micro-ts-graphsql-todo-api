import { Todo } from "../models/todo";
import { TodoRepository } from "../repositories/todos";

export class TodoResolver {
  todoRepo: TodoRepository;

  constructor(todoRepo: TodoRepository) {
    this.todoRepo = todoRepo;
  }

  get = (
    _parent: any,
    args: { id: String; description: String; isDone: boolean },
    _context: any,
    _info: any
  ): Promise<Todo[]> => {
    return this.todoRepo.gets(args);
  };

  create = (
    _parent: any,
    args: { description: String },
    _context: any,
    _info: any
  ): Promise<Todo> => {
    return this.todoRepo.create(args.description);
  };

  complete = (
    _parent: any,
    args: { id: String },
    _context: any,
    _info: any
  ): Promise<Todo> => {
    return this.todoRepo.complete(args.id);
  };

  update = (
    _parent: any,
    args: { id: String; description: String },
    _context: any,
    _info: any
  ): Promise<Todo> => {
    return this.todoRepo.update(args);
  };
}
