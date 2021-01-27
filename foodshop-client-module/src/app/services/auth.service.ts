import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setLocalStorage(responseObj) {
    const expiresAt = moment().add(responseObj.expiresIn.replace('d', ''), 'd');
    localStorage.setItem('id_token', responseObj.token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem("is_admin", responseObj.isAdmin);
    localStorage.setItem("user_id", responseObj.userId);

  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("is_admin");
    localStorage.removeItem("user_id");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  isAdmin() {
    return JSON.parse(localStorage.getItem("is_admin"));
  }

  getUserId() {
    return localStorage.getItem("user_id");
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
