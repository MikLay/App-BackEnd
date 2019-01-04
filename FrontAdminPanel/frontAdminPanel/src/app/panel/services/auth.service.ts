import { Injectable } from '@angular/core';
import {User} from '../login/user';
import {isNullOrUndefined} from 'util';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  setUser(user: User) {

    const userString = JSON.stringify(user);
    localStorage.setItem('currentUser', userString);
  }

  getCurrentUser(): User {
    const userString = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(userString)) {
      const user: User = JSON.parse(userString);
      return user;
    } else {
      return null;
    }
  }

  setToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  getToken(): String {
    return localStorage.getItem('accessToken');
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
  }

}
