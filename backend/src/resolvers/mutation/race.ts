import { ulid } from 'ulid';

import { MutationResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToRace } from '@/resolvers/converter';
import {
  raceIncludeOptions,
  generateUpdateHorseEntryData,
} from '@/resolvers/shared';

const createRace: MutationResolvers['createRace'] = async (_, { input }) =>
  prisma.race
    .create({
      data: {
        ...input,
        id: ulid(),
        horses: {
          createMany: {
            // eslint-disable-next-line camelcase
            data: input.horses.map(({ race_id, ...others }) => ({
              ...others,
              id: ulid(),
            })),
          },
        },
      },
      include: raceIncludeOptions,
    })
    .then(convertToRace);

const updateRace: MutationResolvers['updateRace'] = async (
  _,
  { id, input },
) => {
  await prisma.race.findUniqueOrThrow({ where: { id } });

  return prisma.race
    .update({
      data: {
        name: input.name || undefined,
        date: input.date || undefined,
        course: input.course || undefined,
        distance: input.distance || undefined,
        order: input.order || undefined,
        horses: input.horses
          ? {
              update: input.horses.map((tuple) => ({
                where: { id: tuple.id },
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                data: generateUpdateHorseEntryData(tuple.input),
              })),
            }
          : undefined,
      },
      where: { id },
      include: raceIncludeOptions,
    })
    .then(convertToRace);
};

const deleteRace: MutationResolvers['deleteRace'] = async (_, { id }) => {
  await prisma.race.findUniqueOrThrow({ where: { id } });

  return prisma.race.delete({ where: { id } }).then((value) => value.id);
};

export { createRace, updateRace, deleteRace };
