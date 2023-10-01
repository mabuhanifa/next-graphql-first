import { Context } from "@apollo/client";

export const resolvers = {
  Query: {
    novels: async (parent: any, args: any, context: Context) => {
      return context.prisma.novel.findMany({
        include: {
          author: true,
        },
      });
    },
  },

  Mutation: {
    addNovel: async (parent: any, args: any, context: Context) => {
      const { title, image } = args;

      const newNovel = await context.prisma.novel.create({
        data: {
          title,
          image,
        },
      });

      return newNovel;
    },
  },
};
