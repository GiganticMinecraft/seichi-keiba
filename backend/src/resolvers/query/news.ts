import { asNewsTitle, fromDate } from '@giganticminecraft/seichi-keiba-shared';
import { News } from '@prisma/client';

import { defaultPagination, QueryResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';

const convertToReturnValue = (news: News) => ({
  ...news,
  title: asNewsTitle(news.title),
  closed_at: news.closed_at ? fromDate(news.closed_at) : undefined,
  created_at: fromDate(news.created_at),
  last_updated_at: fromDate(news.last_updated_at),
});

const news: QueryResolvers['news'] = async (_, { id }) => {
  const found = await prisma.news.findUnique({ where: { id } });

  if (!found) throw new Error('There is no News you are looking for');

  return convertToReturnValue(found);
};

const allNews: QueryResolvers['allNews'] = async (_, { pagination }) => {
  const foundList = await prisma.news.findMany({
    take: pagination.limit ?? defaultPagination.limit,
    skip: pagination.offset ?? defaultPagination.offset,
  });

  return foundList.map(convertToReturnValue);
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

  return foundList.map(convertToReturnValue);
};

export { news, allNews, allValidNews };
