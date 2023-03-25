import { Products } from "./Products";

export class CartItem{
  constructor(public products : Products){ }
  quantity:number = 1;
  price:number = this.products.price;
}
