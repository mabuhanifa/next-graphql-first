import { Context } from "@/pages/api/graphql";

export const resolvers = {
  Query: {
    novel: async (_parent: any, args: any, context: Context) => {
      return await context.prisma.novel.findUnique({
        where: {
          id: args.id,
        },
      });
    },
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
  updateNovel: async (_parent: any, args: any, context: Context) => {
    return await context.prisma.novel.update({
      where: {
        id: args.id,
      },

      data: {
        title: args.title,

        image: args.image,
      },
    });
  },
};
