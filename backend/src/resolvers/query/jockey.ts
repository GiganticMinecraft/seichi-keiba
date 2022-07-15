import { asJockeyName } from '@giganticminecraft/seichi-keiba-shared';
import { Jockey } from '@prisma/client';

import { defaultPagination, QueryResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';

const convertToReturnValue = (jockey: Jockey) => ({
  ...jockey,
  name: asJockeyName(jockey.name),
});

const jockey: QueryResolvers['jockey'] = async (_, { id }) => {
  const found = await prisma.jockey.findUnique({ where: { id } });

  if (!found) throw new Error('There is no Jockey you are looking for');

  return convertToReturnValue(found);
};

const allJockeys: QueryResolvers['allJockeys'] = async (_, { pagination }) => {
  const foundList = await prisma.jockey.findMany({
    take: pagination.limit ?? defaultPagination.limit,
    skip: pagination.offset ?? defaultPagination.offset,
  });

  return foundList.map(convertToReturnValue);
};

export { jockey, allJockeys };
