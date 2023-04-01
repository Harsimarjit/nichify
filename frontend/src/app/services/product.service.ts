import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_products, sample_tags } from 'src/data';
import { PRODUCTS_BY_ID_URL, PRODUCTS_BY_SEARCH_URL, PRODUCTS_BY_TAGS_URL, PRODUCTS_TAGS_URL, PRODUCTS_URL } from 'src/shared/models/constants/urls';
import { Products } from 'src/shared/models/Products';
import { Tag } from 'src/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Products[]>{
      return this.http.get<Products[]>(PRODUCTS_URL);
  }
  getAllProductsBySearchTerm(searchTerm:string){
    return this.http.get<Products[]>(PRODUCTS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(PRODUCTS_TAGS_URL);
  }

  getAllProductsByTag(tag:string): Observable<Products[]>{
    return tag == "All"?
    this.getAll():
    this.http.get<Products[]>(PRODUCTS_BY_TAGS_URL + tag);
  }

  getFoodById(productId:string):Observable<Products>{
    return this.http.get<Products>(PRODUCTS_BY_ID_URL + productId);
  }
}
