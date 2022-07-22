import { ulid } from 'ulid';

import { MutationResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToRace } from '@/resolvers/converter';
import raceIncludeOptions from '@/resolvers/shared';

const createRace: MutationResolvers['createRace'] = async (_, { input }) =>
  prisma.race
    .create({ data: { ...input, id: ulid() }, include: raceIncludeOptions })
    .then(convertToRace);

// TODO: update HorseEntry
const updateRace: MutationResolvers['updateRace'] = async (
  _,
  { id, input },
) => {
  const race = await prisma.race.findUnique({
    where: { id },
    include: raceIncludeOptions,
  });

  if (!race) throw new Error('There is no Race you want to update');

  return prisma.race
    .update({
      data: {
        name: input.name ?? race.name,
        date: input.date ?? race.date,
        course: input.course ?? race.course,
        distance: input.distance ?? race.distance,
        order: input.order ?? race.order,
      },
      where: { id },
    })
    .then((value) => ({ ...value, horses: race.horses }))
    .then(convertToRace);
};

const deleteRace: MutationResolvers['deleteRace'] = async (_, { id }) => {
  const race = await prisma.race.findUnique({ where: { id } });

  if (!race) throw new Error('There is no Race you want to delete');

  return prisma.race.delete({ where: { id } }).then((value) => value.id);
};

export { createRace, updateRace, deleteRace };
