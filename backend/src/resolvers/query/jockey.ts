import { defaultPagination, QueryResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToJockey } from '@/resolvers/converter';

const jockey: QueryResolvers['jockey'] = async (_, { id }) =>
  prisma.jockey.findUniqueOrThrow({ where: { id } }).then(convertToJockey);

const allJockeys: QueryResolvers['allJockeys'] = async (_, { pagination }) => {
  const foundList = await prisma.jockey.findMany({
    take: pagination.limit ?? defaultPagination.limit,
    skip: pagination.offset ?? defaultPagination.offset,
  });

  return foundList.map(convertToJockey);
};

export { jockey, allJockeys };
