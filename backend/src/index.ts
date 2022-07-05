import { ApolloServer, gql } from "apollo-server";
import { readFileSync } from "fs";
import { join } from "path";

import { serverSchema, asDateString } from "@shared";

const path = join(process.cwd(), "../shared/src/apollo", "schema.graphql");
const typeDefs = readFileSync(path).toString("utf-8");

// スキーマと実際のデータ構造の紐付けを resolvers で行う
const news = [
  {
    id: "1",
    title: "title undefined",
    contents: ["contents"],
    created_at: asDateString("2022/07/01"),
    closed_at: undefined,
  },
  {
    id: "2",
    title: "title valid",
    contents: ["contents"],
    created_at: asDateString("2022/07/01"),
    closed_at: asDateString("2022-07-10"),
  },
  {
    id: "3",
    title: "title invalid",
    contents: ["contents"],
    created_at: asDateString("2022/07/01"),
    closed_at: asDateString("2022-07-01"),
  },
];

const resolvers: serverSchema.Resolvers = {
  Query: {
    news: () => news,
    valid_news: () =>
      news.filter(
        (value) => !value.closed_at || new Date(value.closed_at) >= new Date()
      ),
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
