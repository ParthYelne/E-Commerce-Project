import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from './services/seller.service';

export const sellerAuthGuard: CanActivateFn = (route, state) => {
  let sellerService = Inject(SellerService);

  if (localStorage.getItem('seller')) {
    return true;
  }

  return sellerService.isSellerLoggedIn;
};

// @Injectable({
//   providedIn: 'root'
// })

// export class sellerAuthGuard implements CanActivate {
//   constructor(private sellerService: SellerService) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Observable<boolean | UrlTree > | Promise <boolean | UrlTree > | boolean | UrlTree {
    
//     if (localStorage.getItem('seller')){
//       return true;
//     }

//     return this.sellerService.isSellerLoggedIn;
//   }
// }
