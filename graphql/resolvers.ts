import { Context } from "@apollo/client";

export const resolvers = {
  Query: {
    novels: async (parent: any, args: any, context: Context) => {
      return context.prisma.novel.findMany();
    },
  },
};
