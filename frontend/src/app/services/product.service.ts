import { Injectable } from '@angular/core';
import { sample_products } from 'src/data';
import { Products } from 'src/shared/models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAll():Products[]{
      return sample_products;
  }
  getAllProductsBySearchTerm(searchTerm:string){
    return this.getAll().filter(products => products.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
