import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productInfo } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult: undefined | productInfo[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // let query = this.activatedRoute.snapshot.paramMap.get('query');

    this.activatedRoute.paramMap.subscribe((map) => {
      let query = map.get('query');
      query &&
        this.productService.searchProductService(query).subscribe((result) => {
          this.searchResult = result;
          console.log(query);
          console.warn(this.searchResult);
        });
    });
  }
}
