import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  sellerName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((value: any) => {
      if (value.url) {
        if (localStorage.getItem('seller') && value.url.includes('seller')) {
          console.log('Seller Area !');
          this.menuType = 'seller';

          if(localStorage.getItem('seller')) {
            let sellerStoredData = localStorage.getItem('seller');
            // to take the first input of the user we take 0th array from sellerStoredData in the end
            let sellerCredentials = sellerStoredData && JSON.parse(sellerStoredData)[0];
            this.sellerName = sellerCredentials.name;
          }
        } 
        else {
          console.warn('Outside of Seller Area');
          this.menuType = 'default';
        }
      }
    });
  }

  logout() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
}
