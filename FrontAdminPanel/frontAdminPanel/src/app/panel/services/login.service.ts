import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {AuthService} from './auth.service';
import {Category} from '../admin-profile/models/category.model';
import {Product} from '../admin-profile/models/product.model';
import {ValidOrder} from '../admin-profile/models/valid-order.model';
import {ValidProduct} from '../admin-profile/models/valid-product';
import {isNullOrUndefined} from 'util';
import {OrderModel} from '../admin-profile/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': '' + this.authService.getToken()
    })
  };



  serverUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  login(username: string, password: string): Observable<any> {

    const url = this.serverUrl + 'Users/login?include=user';

    return this.http.post(url, {username: username, password: password}, this.httpOptions);
  }

  logout(): Observable<any> {
    const url = this.serverUrl + '/Users/logout';
    const data = {accessTokenID: this.authService.getToken()};
    return this.http.post(url, data, this.httpOptions);
  }

  getAllCategories() {
    const url = this.serverUrl + '/category';
    return this.http.get(url, this.httpOptions);
  }

  addCategory(name: string, description: string) {
    return this.http.post(this.serverUrl + '/category', JSON.stringify({name: name, description: description}), this.httpOptions);
  }

  deleteCategory(id: string) {
    return this.http.delete(this.serverUrl + '/category/' + id, this.httpOptions).subscribe((error) => console.log(error));

  }

  editCategory(category: Category) {
    return this.http.patch(this.serverUrl + '/category/' + category.id, category , this.httpOptions).subscribe((error) =>
      console.log(error));
  }


  getAllProducts() {
    const url = this.serverUrl + 'product';
    return this.http.get(url, this.httpOptions);
  }

  addProduct(product: Product, url = '5c0ff85cb27baf5dfc8f9e60') {
    if (!isNullOrUndefined(product.category)) {
      url = product.category;
    }
    return this.http.post(this.serverUrl + 'category/' + url + '/listProducts', JSON.stringify(product), this.httpOptions);
  }

  deleteProduct(id: String) {
    return this.http.delete(this.serverUrl + '/product/' + id, this.httpOptions).subscribe((error) => console.log(error));
  }

  editProduct(product: ValidProduct) {
    return this.http.patch(this.serverUrl + '/product/' + product.id, product , this.httpOptions).subscribe((error) =>
      console.log(error));
  }

  getAllOrders() {
    const url = this.serverUrl + '/order';
    return this.http.get(url, this.httpOptions);
  }


}
