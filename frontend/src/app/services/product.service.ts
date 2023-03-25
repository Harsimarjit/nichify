import { Injectable } from '@angular/core';
import { sample_products, sample_tags } from 'src/data';
import { Products } from 'src/shared/models/Products';
import { Tag } from 'src/shared/models/tag';

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

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllProductsByTag(tag:string):Products[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(products => products.tags?.includes(tag));
  }

  getFoodById(productId:string):Products{
    return this.getAll().find(products => products.id == productId) ?? new Products();
  }
}
