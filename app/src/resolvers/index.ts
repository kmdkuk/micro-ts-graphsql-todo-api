import {movies} from './movies';
import {todos} from './todos';

export const resolvers = {
  Query: {
    movies,
    todos,
  },
};
