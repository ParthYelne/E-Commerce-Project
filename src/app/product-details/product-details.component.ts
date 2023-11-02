import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productInfo } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | productInfo;
  productQuantity: number = 1;

  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let product_id = this.activeRoute.snapshot.paramMap.get('productId');
    // console.warn(product_id);

    product_id &&
      this.productService.getProduct(product_id).subscribe((output) => {
        console.warn(output);

        this.productData = output;
      });
  }

  handleQuantity(value: string) {
    if(this.productQuantity <= 9 &&  value == 'plus') {
      this.productQuantity += 1; 
    }
    else if(this.productQuantity > 1 && value == 'minus') {
      this.productQuantity -= 1;
    }
  }
}
