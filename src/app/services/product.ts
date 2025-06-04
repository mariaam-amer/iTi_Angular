import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BaseURL='https://dummyjson.com/products';



    constructor(private http:HttpClient) { 
       console.log('✅ ProductService Created');
    }


    getProducts():Observable<any>{
      console.log("📦 Fetching products...");
      return this.http.get<any>(this.BaseURL);
    }

    getCategories():Observable<any>{
      console.log("📦 Fetching categories...");
      return this.http.get<any>(`${this.BaseURL}/categories`);
    }

  

}
