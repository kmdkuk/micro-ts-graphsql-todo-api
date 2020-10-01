import { todos, createTodo } from "./todos";

export const resolvers = {
  Query: {
    todos,
  },
  Mutation: {
    createTodo,
  },
};
