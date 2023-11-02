import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productInfo } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';
  searchResult: undefined | productInfo[];

  showResults: boolean = false;

  noresult = false;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          // console.log('Seller Area !');
          this.menuType = 'seller';

          if (localStorage.getItem('seller')) {
            let sellerStoredData = localStorage.getItem('seller');
            // to take the first input of the user we take 0th array from sellerStoredData in the end
            let sellerCredentials =
              sellerStoredData && JSON.parse(sellerStoredData)[0];
            this.sellerName = sellerCredentials.name;
          }
        } else {
          // console.warn('Outside of Seller Area');
          this.menuType = 'default';
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

  searchProduct(event: any) {
    //   if (query) {
    //     const element = query.target as HTMLInputElement;
    //     console.warn(element.value);
    //     this.productService
    //       .searchProductService(element.value)
    //       .subscribe((result) => {
    //         console.warn(result);
    //         if (result.length > 5) {
    //           result.length = 5;
    //         }
    //         this.searchResult = result;
    //       });
    //   }

    let query = event.target.value;

    if (query.length > 0) {
      this.showResults = true;
      this.productService.searchProductService(query).subscribe((result) => {
        // console.warn(result);
        if (result.length > 5) {
          result.length = 5;
          this.noresult = false;
        }
        if(result.length == 0)
        {
          this.noresult = true;
        }
    
        this.searchResult = result;
      });
    } else {
      this.showResults = false;
    }
  }

  hideSearch() {
    this.searchResult = undefined;
  }

  submitSearch(value: string) {
    console.warn(value);
    this.router.navigate(['search',value]);
  }
}
