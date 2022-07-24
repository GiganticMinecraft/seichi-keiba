import { defaultPagination, QueryResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToHorse } from '@/resolvers/converter';

const horse: QueryResolvers['horse'] = async (_, { id }) =>
  prisma.horse.findUniqueOrThrow({ where: { id } }).then(convertToHorse);

const allHorses: QueryResolvers['allHorses'] = async (_, { pagination }) => {
  const foundList = await prisma.horse.findMany({
    take: pagination.limit ?? defaultPagination.limit,
    skip: pagination.offset ?? defaultPagination.offset,
  });

  return foundList.map(convertToHorse);
};

export { horse, allHorses };
