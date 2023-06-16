import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      id: ID
      name: String
      numberInt: Int
      numberFloat: Float
      trueOrFalse: Boolean
      arrayString: [String!]!
    }
  `,
  resolvers: {
    Query: {
      id: () => 1,
      name: () => 'John Doe',
      numberInt: () => 1,
      numberFloat: () => 1.1,
      trueOrFalse: () => true,
      arrayString: () => ['John', 'Doe'],
    },
  },
});

server
  .listen(4003)
  .then(({ url }) => console.log(`Server is running on port ${url}`));
