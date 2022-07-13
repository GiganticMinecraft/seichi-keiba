import {
  asDateString,
  asNewsTitle,
} from '@giganticminecraft/seichi-keiba-shared';
import { ApolloServer } from 'apollo-server';
import { readFile } from 'fs/promises';
import { join } from 'path';

import type { News, Resolvers } from '@/gen-apollo';
import { disconnectFromDb } from '@/prisma';

// スキーマと実際のデータ構造の紐付けを resolvers で行う
const news: News[] = [
  {
    id: '1',
    title: asNewsTitle('title undefined'),
    contents: ['contents'],
    created_at: asDateString('2022/07/01'),
    closed_at: undefined,
  },
  {
    id: '2',
    title: asNewsTitle('title valid'),
    contents: ['contents'],
    created_at: asDateString('2022/07/01'),
    closed_at: asDateString('2022-07-10'),
  },
  {
    id: '3',
    title: asNewsTitle('title invalid'),
    contents: ['contents'],
    created_at: asDateString('2022/07/01'),
    closed_at: asDateString('2022-07-01'),
  },
];

const resolvers: Resolvers = {
  Query: {
    all_news: () => news,
    all_valid_news: () =>
      news.filter(
        (value) => !value.closed_at || new Date(value.closed_at) >= new Date(),
      ),
    news: (_, { id }) => news.find((v) => v.id === id) ?? null,
  },
};

const loadSchema = async () => {
  const SCHEMA_FILE = 'schema.graphql';
  const path =
    process.env.NODE_ENV === 'production'
      ? ['.', SCHEMA_FILE]
      : ['../shared/src/apollo/generated', SCHEMA_FILE];

  return readFile(join(process.cwd(), ...path), {
    encoding: 'utf-8',
  });
};

const runServer = async (typeDefs: string) => {
  const server = new ApolloServer({ typeDefs, resolvers, cache: 'bounded' });

  return server.listen().then(({ url }) => url);
};

const main = async () => {
  const schema = await loadSchema();

  runServer(schema)
    .then((url) => {
      console.log(`🚀  Server ready at ${url}`);
    })
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    .finally(async () => disconnectFromDb());
};

main().catch((err) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`Error has occured!: ${err}`);
});
