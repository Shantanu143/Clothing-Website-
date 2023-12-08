import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ImportDataService {


  url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}
  productDetails() {
    return this.http.get(this.url);
  }



}
