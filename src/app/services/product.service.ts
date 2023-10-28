import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productInfo } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addNewEmployeeService(data: productInfo) {
    return this.http.post('http://localhost:3000/products', data);
  }

  productList() {
    return this.http.get<productInfo[]>('http://localhost:3000/products');
  }

  deleteProductService(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  getProduct(id: string) {
    return this.http.get<productInfo>(`http://localhost:3000/products/${id}`);
  }

  updateProductService(product: productInfo) {
    return this.http.put<productInfo>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }

  popularProducts() {
    return this.http.get<productInfo[]>('http://localhost:3000/products?_limit=3');
  }
}
