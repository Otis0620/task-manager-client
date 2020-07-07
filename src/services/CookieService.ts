import { CookieServiceAuthI } from './interfaces';

class CookieService implements CookieServiceAuthI {
  public cookieService: CookieServiceAuthI;

  constructor(cookieService: CookieServiceAuthI) {
    this.cookieService = cookieService;
  }

  get(name: string) {
    return this.cookieService.get(name);
  }

  set(name: string, payload: any) {
    return this.cookieService.set(name, payload);
  }

  remove(name: string) {
    return this.cookieService.remove(name);
  }
}

export default CookieService;
