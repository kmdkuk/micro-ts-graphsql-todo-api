import { movies } from "./movies";
import { todos, createTodo } from "./todos";

export const resolvers = {
  Query: {
    movies,
    todos,
  },
  Mutation: {
    createTodo,
  },
};
