import { defaultPagination, QueryResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToRace } from '@/resolvers/converter';
import raceIncludeOptions from '@/resolvers/shared';

const race: QueryResolvers['race'] = async (_, { id }) => {
  const found = await prisma.race.findUnique({
    where: { id },
    include: raceIncludeOptions,
  });

  if (!found) throw new Error('There is no Race you are looking for');

  return convertToRace(found);
};

const allRaces: QueryResolvers['allRaces'] = async (_, { pagination }) => {
  const foundList = await prisma.race.findMany({
    take: pagination.limit ?? defaultPagination.limit,
    skip: pagination.offset ?? defaultPagination.offset,
    include: raceIncludeOptions,
  });

  return foundList.map(convertToRace);
};

const allValidRaces: QueryResolvers['allValidRaces'] = async (
  _,
  { pagination },
) => {
  const foundList = await prisma.race.findMany({
    take: pagination.limit ?? defaultPagination.limit,
    skip: pagination.offset ?? defaultPagination.offset,
    include: raceIncludeOptions,
    where: { date: { gte: new Date() } },
  });

  return foundList.map(convertToRace);
};

export { race, allRaces, allValidRaces };
