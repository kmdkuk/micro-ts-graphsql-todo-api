import mongoose from "mongoose";
import { Todo } from "../models/todo";
import { TodoRepository } from "../repositories/todos";

export class TodoResolver {
  todoRepo: TodoRepository;

  constructor(todoRepo: TodoRepository) {
    this.todoRepo = todoRepo;
  }

  getAll = (
    _parent: any,
    _args: any,
    _context: any,
    _info: any
  ): Promise<Todo[]> => {
    return this.todoRepo.gets();
  };

  create = (
    _parent: any,
    args: { description: String },
    _context: any,
    _info: any
  ): Promise<Todo> => {
    return this.todoRepo.create(args.description);
  };
}
