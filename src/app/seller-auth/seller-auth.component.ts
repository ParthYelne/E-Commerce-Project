import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userInfoSignUp, userInfoLogin } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError: string = '';

  constructor(private sellerService: SellerService, private router: Router) {}

  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }

  signUp(data: userInfoSignUp): void {
    this.sellerService.userSignUp(data);
  }

  login(data: userInfoLogin): void {
    // console.warn(data);
    this.sellerService.userLogin(data);
    this.sellerService.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = 'Email or Password is incorrect';
      }
    });
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
}
