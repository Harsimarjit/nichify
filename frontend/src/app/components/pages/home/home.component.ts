import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Products } from 'src/shared/models/Products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products:Products[] = [];
  constructor(private productService:ProductService,activatedRoute:ActivatedRoute) {
    let productsObservable:Observable<Products[]>;
    activatedRoute.params.subscribe((params) => {
      if(params['searchTerm'])
      productsObservable = this.productService.getAllProductsBySearchTerm(params['searchTerm']);
      else if(params['tag'])
      productsObservable = this.productService.getAllProductsByTag(params['tag']);
      else
      productsObservable = productService.getAll();

      productsObservable.subscribe((serverProducts) => {
        this.products = serverProducts;
      })
      })
  }

  ngOnInit() : void{

  }
}
