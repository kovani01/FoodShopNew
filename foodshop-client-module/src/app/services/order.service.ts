import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = 'http://localhost:1488/api/order';

  constructor(
    private http: HttpClient
  ) { }


  getDelivered(): Observable<any> {
    return this.http.get(this.url + '/delivered') as Observable<any>;
  }

  getNotDelivered(): Observable<any> {
    return this.http.get(this.url + '/not-delivered') as Observable<any>;
  }

  createOrder(name, products, address, phoneNumber, userId = null): Observable<any> {
    let body = {
      name: name,
      products: products,
      address: address,
      phoneNumber: phoneNumber,
      userId: userId
    }
    return this.http.post(this.url, body) as Observable<any>;
  }

  deleteOrder(id: string): Observable<any> {
    return this.http.delete(this.url + `/${id}`) as Observable<any>;
  }

  updateState(id: string, isDelivered: boolean): Observable<any> {
    let body = {
      delivered: isDelivered
    }
    return this.http.put(this.url + `/${id}`, body) as Observable<any>;
  }


}
