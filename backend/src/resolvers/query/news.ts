import { defaultPagination, QueryResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToNews } from '@/resolvers/converter';

const news: QueryResolvers['news'] = async (_, { id }) =>
  prisma.news.findUniqueOrThrow({ where: { id } }).then(convertToNews);

const allNews: QueryResolvers['allNews'] = async (_, { pagination }) => {
  const foundList = await prisma.news.findMany({
    take: pagination.limit ?? defaultPagination.limit,
    skip: pagination.offset ?? defaultPagination.offset,
  });

  return foundList.map(convertToNews);
};

const allValidNews: QueryResolvers['allValidNews'] = async (
  _,
  { pagination },
) => {
  const foundList = await prisma.news.findMany({
    take: pagination.limit ?? defaultPagination.limit,
    skip: pagination.offset ?? defaultPagination.offset,
    where: {
      OR: [
        {
          closed_at: null,
        },
        {
          closed_at: {
            gte: new Date(),
          },
        },
      ],
    },
  });

  return foundList.map(convertToNews);
};

export { news, allNews, allValidNews };
