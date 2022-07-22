import { defaultPagination, QueryResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToHorse } from '@/resolvers/converter';

const horse: QueryResolvers['horse'] = async (_, { id }) => {
  const found = await prisma.horse.findUnique({ where: { id } });

  if (!found) throw new Error('There is no Horse you are looking for');

  return convertToHorse(found);
};

const allHorses: QueryResolvers['allHorses'] = async (_, { pagination }) => {
  const foundList = await prisma.horse.findMany({
    take: pagination.limit ?? defaultPagination.limit,
    skip: pagination.offset ?? defaultPagination.offset,
  });

  return foundList.map(convertToHorse);
};

export { horse, allHorses };
