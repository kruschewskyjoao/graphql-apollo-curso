import fetch from 'node-fetch';

const API = 'http://localhost:3000';

export const context = () => {
  return {
    getUsers: (path = '/') => fetch(`${API}/users/${path}`),
    getPosts: (path = '/') => fetch(`${API}/posts/${path}`),
  };
};
