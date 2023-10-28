import { Component } from '@angular/core';
import { productInfo } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {
  addProductMessage: string | undefined;

  constructor(private productService: ProductService) {}

  addNewProduct(data: productInfo) {
    this.productService.addNewEmployeeService(data).subscribe((result) => {
      console.log(result);
      if(result) {
        this.addProductMessage = "Product has been added Successfully!";
      }

      setTimeout(() => (this.addProductMessage = undefined), 3000);
    });
  }
}
