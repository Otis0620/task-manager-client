import axios from 'axios';
import AuthService from './AuthService';

class RequestService extends AuthService {
  async get(path: string) {
    try {
      const { data } = await axios.get(`${this.url}${path}`, this.headersWithAuth());

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async post(path: string, payload) {
    const {
      data: { id },
    } = await axios.post(`${this.url}${path}`, payload, this.headersWithAuth());

    return {
      ...payload,
      id,
    };
  }
}

export default RequestService;
