const user = () => ({ id: 1, userName: 'Luiz' });
const users = () => {
  return [
    { id: 1, userName: 'Luiz 1' },
    { id: 2, userName: 'Luiz 2' },
    { id: 3, userName: 'Luiz 3' },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
