import { ApolloServer } from 'apollo-server';
import { readFile } from 'fs/promises';
import { join } from 'path';

import type { Resolvers } from '@/gen-apollo';
import { connectToDb, disconnectFromDb } from '@/prisma';
import * as query from '@/resolvers/query';

const resolvers: Resolvers = {
  Query: query,
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
  await connectToDb();

  const server = new ApolloServer({ typeDefs, resolvers, cache: 'bounded' });

  return server
    .listen()
    .then(({ url }) => url) // eslint-disable-next-line @typescript-eslint/no-misused-promises
    .finally(async () => disconnectFromDb());
};

const main = async () => {
  const schema = await loadSchema();

  await runServer(schema).then((url) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

main().catch((err) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`Error has occured!: ${err}`);
});
