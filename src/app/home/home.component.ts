import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { productInfo } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularProductsData: undefined | productInfo[];
  trendyProductsData: undefined | productInfo[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.popularProductsService().subscribe((data) => {
      console.warn(data);
      this.popularProductsData = data;
    });

    // let swiper = new Swiper(".mySwiper", {
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    // });

    this.productService.trendyProducts().subscribe((data) => {
      this.trendyProductsData = data;
    });
  }
}
