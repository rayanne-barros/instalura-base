import { HttpClient } from '../../infra/http/HttpClient';
import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { authService } from '../auth/authService';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api.vercel.app'
  : 'https://instalura-api.vercel.app';

export const userService = {
  async getProfilePage(ctx) {
    const url = `${BASE_URL}/api/users/posts`;
    try {
      const token = await authService(ctx).getToken();
      const response = await HttpClient(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return {
        posts: response.data,
      };
    } catch (err) {
      throw new Error('Não conseguimos pegar os posts');
    }
  },
  async getGithubInfo(user) {
    const url = `https://api.github.com/users/${user}`;
    const infoGithub = await fetch(url)
      .then((response) => response.json())
      .then((res) => res)
      .catch((error) => error);

    if (infoGithub) {
      return {
        url: infoGithub.html_url ? infoGithub.html_url : 'https://github.com/',
        avatar: infoGithub.avatar_url ? infoGithub.avatar_url : '/images/nick.png',
        name: infoGithub.name ? infoGithub.name : '',
        followers: infoGithub.followers ? infoGithub.followers : 0,
        following: infoGithub.following ? infoGithub.following : 0,
        username: infoGithub.login ? infoGithub.login : '',
        bio: infoGithub.bio ? infoGithub.bio : '',
      };
    }
    return infoGithub.message;
  },
  async postPhoto(data) {
    const url = `${BASE_URL}/api/posts`;
    try {
      const token = await authService().getToken();
      const response = await HttpClient(url, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      });
      return response.data;
    } catch (err) {
      throw new Error('Não foi possivel enviar o novo post', err);
    }
  },
  async likeIt(id) {
    const url = `${BASE_URL}/api/posts/${id}/like`;
    try {
      const token = await authService().getToken();
      const response = await HttpClient(url, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: {},
      });
      if (response.data) {
        return response.data;
      }
      return undefined;
    } catch (err) {
      return undefined;
    }
  },
};
