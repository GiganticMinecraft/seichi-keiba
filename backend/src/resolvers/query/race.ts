import {
  asHorseName,
  asJockeyName,
  asNaturalNumber,
  asRaceName,
  fromDate,
} from '@giganticminecraft/seichi-keiba-shared';
import { Horse, HorseEntry, Jockey, Race } from '@prisma/client';

import { defaultPagination, QueryResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';

const convertToReturnValue = (
  race: Race & {
    horses: (HorseEntry & {
      jockey: Jockey;
      horse: Horse;
    })[];
  },
) => ({
  ...race,
  name: asRaceName(race.name),
  date: fromDate(race.date),
  order: asNaturalNumber(race.order),
  distance: asNaturalNumber(race.distance),
  horses: race.horses.map((value) => ({
    ...value,
    frame: asNaturalNumber(value.frame),
    number: asNaturalNumber(value.number),
    horse: {
      ...value.horse,
      name: asHorseName(value.horse.name),
    },
    jockey: {
      ...value.jockey,
      name: asJockeyName(value.jockey.name),
    },
  })),
});

const includeOptions = {
  horses: {
    include: { jockey: true, horse: true },
  },
};

const race: QueryResolvers['race'] = async (_, { id }) => {
  const found = await prisma.race.findUnique({
    where: { id },
    include: includeOptions,
  });

  if (!found) throw new Error('There is no Race you are looking for');

  return convertToReturnValue(found);
};

const allRaces: QueryResolvers['allRaces'] = async (_, { pagination }) => {
  const foundList = await prisma.race.findMany({
    take: pagination.limit ?? defaultPagination.limit,
    skip: pagination.offset ?? defaultPagination.offset,
    include: includeOptions,
  });

  return foundList.map(convertToReturnValue);
};

const allValidRaces: QueryResolvers['allValidRaces'] = async (
  _,
  { pagination },
) => {
  const foundList = await prisma.race.findMany({
    take: pagination.limit ?? defaultPagination.limit,
    skip: pagination.offset ?? defaultPagination.offset,
    include: includeOptions,
    where: { date: { gte: new Date() } },
  });

  return foundList.map(convertToReturnValue);
};

export { race, allRaces, allValidRaces };
