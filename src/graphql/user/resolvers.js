const user = async (_, { id }, { dataSources }) => {
  const user = await dataSources.userApi.getUser(id);
  return user;
};

const users = async (_, { input }, { dataSources }) => {
  const users = await dataSources.userApi.getUsers(input);
  return users;
};

const posts = ({ id }, _, { postDataLoader }) => {
  return postDataLoader.load(id);
};

export const userResolvers = {
  Query: { user, users },
  User: { posts },
};
