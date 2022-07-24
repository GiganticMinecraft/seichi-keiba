import { ulid } from 'ulid';

import { MutationResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToHorse } from '@/resolvers/converter';

const createHorse: MutationResolvers['createHorse'] = async (_, { input }) =>
  prisma.horse.create({ data: { ...input, id: ulid() } }).then(convertToHorse);

const updateHorse: MutationResolvers['updateHorse'] = async (
  _,
  { id, input },
) => {
  const horse = await prisma.horse.findUnique({ where: { id } });

  if (!horse) throw new Error('There is no Horse you want to update');

  return prisma.horse
    .update({
      data: { name: input.name || undefined },
      where: { id },
    })
    .then(convertToHorse);
};

const deleteHorse: MutationResolvers['deleteHorse'] = async (_, { id }) => {
  const horse = await prisma.horse.findUnique({ where: { id } });

  if (!horse) throw new Error('There is no Horse you want to delete');

  return prisma.horse.delete({ where: { id } }).then((value) => value.id);
};

export { createHorse, updateHorse, deleteHorse };
