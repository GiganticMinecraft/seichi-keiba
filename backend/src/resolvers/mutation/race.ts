import { ulid } from 'ulid';

import { MutationResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToRace } from '@/resolvers/converter';
import raceIncludeOptions from '@/resolvers/shared';

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
                data: {
                  frame: tuple.input.frame || undefined,
                  number: tuple.input.number || undefined,
                  horse_id: tuple.input.horse_id || undefined,
                  jockey_id: tuple.input.jockey_id || undefined,
                  race_id: tuple.input.race_id || undefined,
                },
              })),
            }
          : undefined,
      },
      where: { id },
      include: {
        horses: {
          include: { jockey: true, horse: true },
        },
      },
    })
    .then(convertToRace);
};

const deleteRace: MutationResolvers['deleteRace'] = async (_, { id }) => {
  const race = await prisma.race.findUnique({ where: { id } });

  if (!race) throw new Error('There is no Race you want to delete');

  return prisma.race.delete({ where: { id } }).then((value) => value.id);
};

export { createRace, updateRace, deleteRace };
