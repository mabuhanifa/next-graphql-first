// import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../prisma/db";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";
import allowCors from "@/utils/cors";
import { ApolloServer } from "apollo-server-micro";

export type Context = {
  prisma: PrismaClient;
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// const apolloServer = new ApolloServer<Context>({ typeDefs, resolvers });

// const handler = startServerAndCreateNextHandler(apolloServer, {
//   context: async (req, res) => ({ req, res, prisma }),
// });

// export default allowCors(handler);

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

async function handler(req: any, res: any) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}

export default allowCors(handler);
