import { Component, OnInit } from '@angular/core';
import { productInfo } from '../data-type';
import { ProductService } from '../services/product.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | productInfo[];
  productDeleteMessage: undefined | string;
  icon = faTrash;
  editIcon = faEdit;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.List();
  }

  deleteProduct(id:number) {
    this.productService.deleteProductService(id).subscribe((result) => {
      if(result) {
        this.productDeleteMessage = "Product Deleted Successfully !";
        this.List();
      }

      setTimeout(() => {
        this.productDeleteMessage = undefined
      }, 3000);
    })
  }

  List() {
    this.productService.productList().subscribe((result) => {
      this.productList = result;
    })
  }

}
