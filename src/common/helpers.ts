import {INews} from './types';
import {RAPID_API_KEY} from '@env';
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
        'x-rapidapi-key': RAPID_API_KEY,
        'x-rapidapi-host': xRapidapiHost,
      },
    };

    const response: AxiosResponse<ApiResponse> = await axios.get(
      `https://${rapidhostname}/top-headlines`,
      options,
    );

    return response.data.data;
  } catch (error) {
    console.log(error as string);
    throw error;
  }
};
