import { ApolloServer } from 'apollo-server';
import { context } from './graphql/context';
import { typeDefs, resolvers } from './graphql/schema';
import { PostsApi } from './graphql/post/datasources';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
    };
  },
});

server
  .listen(4003)
  .then(({ url }) => console.log(`Server is running on port ${url}`));
