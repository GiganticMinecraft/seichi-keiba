import { MutationResolvers } from '@/gen-apollo';
import { prisma } from '@/prisma';
import { convertToNews } from '@/resolvers/converter';

const createNews: MutationResolvers['createNews'] = async (_, { input }) =>
  prisma.news.create({ data: { ...input } }).then(convertToNews);

const updateNews: MutationResolvers['updateNews'] = async (
  _,
  { id, input },
) => {
  const news = await prisma.news.findUnique({ where: { id } });

  if (!news) throw new Error('There is no News you want to update');

  return prisma.news
    .update({
      data: {
        title: input.title ?? news.title,
        contents: input.contents ?? news.contents,
        closed_at: input.closed_at,
      },
      where: { id },
    })
    .then(convertToNews);
};

const deleteNews: MutationResolvers['deleteNews'] = async (_, { id }) => {
  const news = await prisma.news.findUnique({ where: { id } });

  if (!news) throw new Error('There is no News you want to delete');

  return prisma.news.delete({ where: { id } }).then((value) => value.id);
};

export { createNews, updateNews, deleteNews };