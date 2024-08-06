import {
  PostCreateInterface,
  PostInterface,
  PostUpdateInterface,
} from '@/interfaces/post.interface';
import { coreService } from './core.service';

export const postService = {
  async getPosts(): Promise<PostInterface[]> {
    return coreService.request('/posts');
  },

  async getPostById(id: string): Promise<PostInterface> {
    return coreService.request(`/posts/${id}`);
  },

  async createPost(post: PostCreateInterface): Promise<PostInterface> {
    return coreService.request('/posts', {
      method: 'POST',
      body: JSON.stringify(post),
    });
  },

  async patchPost(id: string, partialPost: PostUpdateInterface): Promise<PostInterface> {
    return coreService.request(`/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(partialPost),
    });
  },

  async deletePost(id: string): Promise<void> {
    return coreService.request(`/posts/${id}`, {
      method: 'DELETE',
    });
  },
};
