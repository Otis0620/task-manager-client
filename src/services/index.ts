import Cookies from 'js-cookie';
import RequestService from './RequestService';
import AuthService from './AuthService';

export const authService = Object.freeze(new AuthService(Cookies));
export const requestService = Object.freeze(new RequestService(Cookies));
