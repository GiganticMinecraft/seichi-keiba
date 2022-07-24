import { defaultPagination, QueryResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToRace } from '@/resolvers/converter';
import raceIncludeOptions from '@/resolvers/shared';

// TODO: includeしないパターンも
const race: QueryResolvers['race'] = async (_, { id }) =>
  prisma.race
    .findUniqueOrThrow({
      where: { id },
      include: raceIncludeOptions,
    })
    .then(convertToRace);

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
