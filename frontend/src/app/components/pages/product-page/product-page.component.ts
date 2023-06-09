import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/shared/models/Products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  products!: Products;

  constructor(activatedRoute:ActivatedRoute,productService:ProductService,
    private cartService:CartService,private router:Router){
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        productService.getFoodById(params['id'])
        .subscribe(serverProduct => {
          this.products = serverProduct;
        });
    })
  }

  addToCart(){
    this.cartService.addToCart(this.products);
    this.router.navigateByUrl('/cart-page');
  }
}
