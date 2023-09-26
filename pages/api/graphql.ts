import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../../prisma/db";

export type Context = {
  prisma: PrismaClient;
};

const resolvers = {
  Query: {
    hello: () => "world",
  },
};
const typeDefs = `#graphql
    type Query {
    hello: String
    }

`;

const apolloServer = new ApolloServer<Context>({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});
