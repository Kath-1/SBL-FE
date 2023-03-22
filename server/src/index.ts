import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";

const SCHEMA = loadSchemaSync("../schema.graphql", {
  loaders: [new GraphQLFileLoader()],
});

const typeDefs = SCHEMA;

const resolvers = {};

const mocks = {
  Game: () => ({
    awayScore: 7,
    homeScore: 14,
    bets: () => [...new Array(6)],
  }),
  GameBet: () => ({
    player: "Thomas",
    pick: "HOME",
    potentialScore: 820,
  }),

  Team: () => ({
    nickname: "Packers",
    logo: "https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz",
  }),
};

const server = new ApolloServer({
  schema: addMocksToSchema({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    mocks,
  }),
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
