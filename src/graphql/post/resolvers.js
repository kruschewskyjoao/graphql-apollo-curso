const post = () => ({ id: 1, title: 'Post title 1' });
const posts = () => [
  { id: 1, title: 'Post title 1' },
  { id: 2, title: 'Post title 2' },
  { id: 3, title: 'Post title 3' },
];

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
