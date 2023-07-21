import { RESTDataSource } from 'apollo-datasource-rest';
import { createPostFn } from './utils/post-respository';

export class PostsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.API_URL + '/posts';
  }

  async getPosts(urlParams = {}) {
    return this.get('', urlParams, {
      cacheOptions: { ttl: 60 },
    });
  }

  async getPost(id) {
    return this.get(id, undefined, {
      cacheOptions: { ttl: 60 },
    });
  }

  async createPost(postData) {
    return createPostFn(postData, this);
  }
}
