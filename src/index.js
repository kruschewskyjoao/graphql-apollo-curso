import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User
      users: [User!]
    }
    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => ({
        id: 'iahsidha12312',
        userName: 'John Doe',
      }),
      users: () => [
        {
          id: '123123',
          userName: 'John Doe1',
        },
        {
          id: '123321',
          userName: 'John Doe2',
        },
        {
          id: '133333',
          userName: 'John Doe3',
        },
      ],
    },
  },
});

server
  .listen(4003)
  .then(({ url }) => console.log(`Server is running on port ${url}`));
