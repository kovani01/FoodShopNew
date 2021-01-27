import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

class Category{
  _id: string;
  name: string;

  constructor(_id, name){
    this._id = _id;
    this.name = name;
  }
}


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = 'http://localhost:1488/api/category';

  constructor(
    private http: HttpClient
  ) { }


  getCategories(): Observable<Category[]> {
    return this.http.get(this.url) as Observable<Category[]>;
  }

  getCategoryById(id: string): Observable<Category[]> {
    return this.http.get(this.url + `/${id}`) as Observable<Category[]>;
  }

  createCategory(name: string): Observable<string>{
    return this.http.post(this.url, {name: name}) as Observable<string>;
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(this.url + `/${id}`) as Observable<any>;
  }

  editCategory(id: string, newName: string): Observable<any>{
    return this.http.put(this.url + `/${id}`, {name: newName}) as Observable<any>;
  }

}
