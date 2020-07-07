import axios from 'axios';
import CookieService from './CookieService';

class AuthService extends CookieService {
  public url: string;

  constructor(cookieService) {
    super(cookieService);

    this.url = 'http://127.0.0.1:8000/api';
  }

  async login(payload: any) {
    try {
      const path = 'login';
      const { data } = await axios.post(`${this.url}/${path}`, payload);

      this.cookieService.set('access_token', data.access_token);

      return true;
    } catch (error) {
      return false;
    }
  }

  async register(payload: any) {
    try {
      const path = 'register';
      const {
        data: { access_token },
      } = await axios.post(`${this.url}/${path}`, payload);

      this.cookieService.set('access_token', access_token);

      return true;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    try {
      const token = this.cookieService.get('access_token');
      const path = 'logout';

      await axios.get(`${this.url}/${path}`, {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      });

      this.cookieService.remove('access_token');

      return true;
    } catch (error) {
      return false;
    }
  }

  getIsAuthenticated() {
    const token = this.cookieService.get('access_token');
    let isAuthenticated = false;

    token ? (isAuthenticated = true) : (isAuthenticated = false);
    console.log('token ', token);
    console.log('isAuthenticated ', isAuthenticated);

    return isAuthenticated;
  }

  headersWithAuth() {
    return {
      headers: {
        Authorization: `Bearer  ${this.cookieService.get('access_token')}`,
      },
    };
  }
}

export default AuthService;
