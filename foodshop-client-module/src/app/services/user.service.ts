import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:1488/api/user';

  constructor(
    private http: HttpClient
  ) { }


  getUserById(id: string): Observable<any> {
    return this.http.get(this.url + `/${id}`) as Observable<any>;
  }

  register(login: string, password: string, address: string, firstName: string, phoneNumber: string, email: string): Observable<any> {
    let body = {
      login: login,
      password: password,
      address: address,
      firstName: firstName,
      phoneNumber: phoneNumber,
      email: email
    };
    return this.http.post(this.url + `/register`, body) as Observable<any>;
  }

  login(login: string, password: string): Observable<any> {
    let body = {
      login: login,
      password: password
    };
    return this.http.post(this.url + `/login`, body) as Observable<any>;
  }

  changeLogin(userId: string, newValue: string): Observable<any> {
    let body = { value: newValue };
    return this.http.put(`${this.url}/change-login/${userId}`, body) as Observable<any>;
  }

  changeEmail(userId: string, newValue: string): Observable<any> {
    let body = { value: newValue };
    return this.http.put(`${this.url}/change-email/${userId}`, body) as Observable<any>;
  }

  changePhone(userId: string, newValue: string): Observable<any> {
    let body = { value: newValue };
    return this.http.put(`${this.url}/change-phone/${userId}`, body) as Observable<any>;
  }

  changeAddress(userId: string, newValue: string): Observable<any> {
    let body = { value: newValue };
    return this.http.put(`${this.url}/change-address/${userId}`, body) as Observable<any>;
  }

  changeName(userId: string, newValue: string): Observable<any> {
    let body = { value: newValue };
    return this.http.put(`${this.url}/change-name/${userId}`, body) as Observable<any>;
  }

  changeAll(
    userId: string,
    newName: string,
    newLogin: string,
    newEmail: string,
    newPhone: string,
    newAddress: string
  ): Observable<any> {
    let body = {
      name: newName,
      email: newEmail,
      login: newLogin,
      phone: newPhone,
      address: newAddress
    };
    return this.http.put(`${this.url}/change-all/${userId}`, body) as Observable<any>;
  }

  changePassword(userId: string, newPassword: string): Observable<any> {
    let body = { password: newPassword };
    return this.http.put(`${this.url}/change-password/${userId}`, body) as Observable<any>;
  }

}
