import {INews} from './types';
import {RAPID_API_KEY} from '@env';
import axios, {AxiosResponse} from 'axios';
import {xRapidapiHost, rapidhostname} from './constants';

export interface ApiResponse {
  data: INews[];
}

export const fetchNewsData = async (): Promise<INews[]> => {
  const options = {
    method: 'GET',
    url: 'https://news67.p.rapidapi.com/v2/feed',
    headers: {
      'x-rapidapi-key': 'fb3ea5fa49msh92c08049f996242p14b698jsne628e0cfb0d6',
      'x-rapidapi-host': 'news67.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.news;
  } catch (error) {
    console.error(error);
    return [];
  }
};
