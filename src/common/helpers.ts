import {INews} from './types';
import axios, {AxiosResponse} from 'axios';
import {xRapidapiHost, rapidhostname} from './constants';

export interface ApiResponse {
  data: INews[];
}

export const fetchNewsData = async (): Promise<INews[]> => {
  try {
    const options = {
      params: {
        limit: 20,
        country: 'US',
        lang: 'en',
      },
      headers: {
        'x-rapidapi-key': 'fb3ea5fa49msh92c08049f996242p14b698jsne628e0cfb0d6',
        'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com',
      },
    };

    const response: AxiosResponse<ApiResponse> = await axios.get(
      'https://real-time-news-data.p.rapidapi.com/top-headlines',
      options,
    );

    return response.data.data;
  } catch (error) {
    console.log(error as string);
    throw error;
  }
};
