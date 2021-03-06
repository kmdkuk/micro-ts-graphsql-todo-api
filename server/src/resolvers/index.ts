import { TodoResolver } from "./todos";
import { TodoRepository } from "../repositories/todos";

const todoResolver = new TodoResolver(new TodoRepository());

export const resolvers = {
  Query: {
    todos: todoResolver.get,
  },
  Mutation: {
    createTodo: todoResolver.create,
    completeTodo: todoResolver.complete,
    updateTodo: todoResolver.update,
  },
};
