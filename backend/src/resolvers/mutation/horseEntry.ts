import { ulid } from 'ulid';

import { MutationResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToHorseEntry } from '@/resolvers/converter';

const createHorseEntry: MutationResolvers['createHorseEntry'] = async (
  _,
  { input },
) =>
  // TODO: @uniqueを考慮
  prisma.horseEntry
    .create({
      data: {
        id: ulid(),
        frame: input.frame,
        number: input.number,
        horse: { connect: { id: input.horse_id } },
        jockey: { connect: { id: input.jockey_id } },
        race: { connect: { id: input.race_id } },
      },
      include: { horse: true, jockey: true },
    })
    .then(convertToHorseEntry);

const updateHorseEntry: MutationResolvers['updateHorseEntry'] = async (
  _,
  { id, input },
) => {
  await prisma.horseEntry.findUniqueOrThrow({ where: { id } });

  return prisma.horseEntry
    .update({
      data: {
        frame: input.frame || undefined,
        number: input.number || undefined,
        horse_id: input.horse_id || undefined,
        jockey_id: input.jockey_id || undefined,
        race_id: input.race_id || undefined,
      },
      where: { id },
      include: { horse: true, jockey: true },
    })
    .then(convertToHorseEntry);
};

const deleteHorseEntry: MutationResolvers['deleteHorseEntry'] = async (
  _,
  { id },
) => prisma.horseEntry.delete({ where: { id } }).then((v) => v.id);

export { createHorseEntry, updateHorseEntry, deleteHorseEntry };
