import { asHorseName } from '@giganticminecraft/seichi-keiba-shared';
import { Horse } from '@prisma/client';

import { defaultPagination, QueryResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';

const convertToReturnValue = (horse: Horse) => ({
  ...horse,
  name: asHorseName(horse.name),
});

const horse: QueryResolvers['horse'] = async (_, { id }) => {
  const found = await prisma.horse.findUnique({ where: { id } });

  if (!found) throw new Error('There is no Horse you are looking for');

  return convertToReturnValue(found);
};

const allHorses: QueryResolvers['allHorses'] = async (_, { pagination }) => {
  const foundList = await prisma.horse.findMany({
    take: pagination.limit ?? defaultPagination.limit,
    skip: pagination.offset ?? defaultPagination.offset,
  });

  return foundList.map(convertToReturnValue);
};

export { horse, allHorses };
