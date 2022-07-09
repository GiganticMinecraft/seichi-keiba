import {
  serverSchema,
  asDateString,
} from '@giganticminecraft/seichi-keiba-shared';
import { ApolloServer } from 'apollo-server';
import { readFile } from 'fs/promises';
import { join } from 'path';

const path =
  process.env.NODE_ENV === 'production'
    ? ['.', 'schema.graphql']
    : ['../shared/src/apollo/generated', 'schema.graphql'];
const typeDefs = await readFile(join(process.cwd(), ...path), {
  encoding: 'utf-8',
});

// スキーマと実際のデータ構造の紐付けを resolvers で行う
const news = [
  {
    id: '1',
    title: 'title undefined',
    contents: ['contents'],
    created_at: asDateString('2022/07/01'),
    closed_at: undefined,
  },
  {
    id: '2',
    title: 'title valid',
    contents: ['contents'],
    created_at: asDateString('2022/07/01'),
    closed_at: asDateString('2022-07-10'),
  },
  {
    id: '3',
    title: 'title invalid',
    contents: ['contents'],
    created_at: asDateString('2022/07/01'),
    closed_at: asDateString('2022-07-01'),
  },
];

const resolvers: serverSchema.Resolvers = {
  Query: {
    all_news: () => news,
    all_valid_news: () =>
      news.filter(
        (value) => !value.closed_at || new Date(value.closed_at) >= new Date(),
      ),
    news: (_, { id }) => news.find((v) => v.id === id) ?? null,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  })
  .catch((err) => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`Error has occured!: ${err}`);
  });
