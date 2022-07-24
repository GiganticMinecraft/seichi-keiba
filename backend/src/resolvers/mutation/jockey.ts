import { ulid } from 'ulid';

import { MutationResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToJockey } from '@/resolvers/converter';

const createJockey: MutationResolvers['createJockey'] = async (_, { input }) =>
  prisma.jockey
    .create({ data: { ...input, id: ulid() } })
    .then(convertToJockey);

const updateJockey: MutationResolvers['updateJockey'] = async (
  _,
  { id, input },
) => {
  await prisma.jockey.findUniqueOrThrow({ where: { id } });

  return prisma.jockey
    .update({
      data: { name: input.name || undefined },
      where: { id },
    })
    .then(convertToJockey);
};

const deleteJockey: MutationResolvers['deleteJockey'] = async (_, { id }) => {
  const jockey = await prisma.jockey.findUnique({ where: { id } });

  if (!jockey) throw new Error('There is no Jockey you want to delete');

  return prisma.jockey.delete({ where: { id } }).then((value) => value.id);
};

export { createJockey, updateJockey, deleteJockey };
