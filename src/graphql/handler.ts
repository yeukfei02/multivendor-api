import { ApolloServer } from "apollo-server-lambda";
import { schema } from "../../api/schema";

const server = new ApolloServer({
  schema,
  tracing: true,
  introspection: true,
  playground: {
    endpoint: "/dev",
  },
  context: ({ event, context }) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const data = {
      event: event,
      context: context,
      requestIp: event.requestContext.identity.sourceIp,
    };
    return data;
  },
});

export const graphqlHandler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});
