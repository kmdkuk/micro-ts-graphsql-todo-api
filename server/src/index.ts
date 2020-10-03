import { ApolloServer } from "apollo-server-micro";
import { send } from "micro";
import { get, post, router } from "microrouter";
import { connect } from "./infra/db";

import { schema } from "./schema";

const apolloServer = new ApolloServer({
  schema,
});
connect();
const graphqlPath = "/data";
const graphqlHandler = apolloServer.createHandler({ path: graphqlPath });

module.exports = router(
  get("/", (req, res) => "Welcome!"),
  post(graphqlPath, graphqlHandler),
  get(graphqlPath, graphqlHandler),
  (_, res) => send(res, 404, "Not Found")
);
