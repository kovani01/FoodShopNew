import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:1488/api/product';

  constructor(
    private http: HttpClient
  ) { }

  getProductsByCategory(id: string): Observable<any> {
    return this.http.get(this.url + `/${id}`) as Observable<any>;
  }
  getProductDetails(id: string): Observable<any> {
    return this.http.get(this.url + `/details/${id}`) as Observable<any>;
  }
  delete(id: string): Observable<any> {
    return this.http.delete(this.url + `/${id}`) as Observable<any>;
  }
  edit(id: string, name:string, price: number, weight: number, composition: string, categoryId: string): Observable<any> {
    let body = {
      name: name,
      price: price,
      weight: weight,
      composition: composition,
      categoryId: categoryId
    }
    return this.http.put(this.url + `/${id}`, body) as Observable<any>;
  }
  createProduct(name:string, price: number, weight: number, composition: string, categoryId: string, file: any): Observable<any>{
    let body = {
      name: name,
      price: price,
      weight: weight,
      composition: composition,
      categoryId: categoryId,
      uploadedFile: file
    }
    return this.http.post(this.url, body) as Observable<any>;
  }
}
