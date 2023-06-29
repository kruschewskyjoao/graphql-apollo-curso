import { gql } from 'apollo-server-express';
import { userTypeDefs } from './user/typedefs';
import { userResolvers } from './user/resolvers';
import { postTypeDefs } from './post/typedefs';
import { postResolvers } from './post/resolvers';

export const rootTypesDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypesDefs, userTypeDefs, postTypeDefs];

export const resolvers = [rootResolvers, userResolvers, postResolvers];
