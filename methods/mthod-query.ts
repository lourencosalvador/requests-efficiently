import axios from 'axios';

const apiService = {
  delete: async (url: string) => {
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },

  put: async (url: string, data: any) => {
    try {
      const response = await axios.put(url, data);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  },
};

export default apiService;