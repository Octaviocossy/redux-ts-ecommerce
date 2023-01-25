import { Result } from '../models';

import Axios from './axios.service';

const api = {
  get: async <T>(url: string): Promise<Result<T>> => {
    try {
      const req = await Axios.get(url);

      if (req.status === 200) {
        return { type: 'success', value: req.data };
      }

      throw new Error(`Data fetching error -> ${url}`);
    } catch (error) {
      console.error(error);

      return { type: 'error', value: error as Error };
    }
  },
  post: async <T, R>(url: string, data: T): Promise<Result<R>> => {
    try {
      const req = await Axios.post(url, data);

      if (req.status === 200 || req.status === 201) {
        return { type: 'success', value: req.data };
      }

      throw new Error(`Data fetching error -> ${url}`);
    } catch (error) {
      console.error(error);

      return { type: 'error', value: error as Error };
    }
  },
};

export default api;
