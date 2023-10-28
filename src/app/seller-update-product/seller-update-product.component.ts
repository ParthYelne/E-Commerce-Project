import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productInfo } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | productInfo;
  productMessage: undefined | string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');

    productId &&
      this.productService.getProduct(productId).subscribe((result) => {
        console.warn(result);
        this.productData = result;
      });
  }

  updateProduct(data: productInfo) {
    if(this.productData) {
      data.id = this.productData.id;
    }
    this.productService.updateProductService(data).subscribe((output) => {
      if (output) {
        this.productMessage = 'Product has updated';
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
      this.router.navigate(['seller-home']);
    }, 3000);
  }
}
