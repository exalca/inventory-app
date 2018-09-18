import { Component } from '@angular/core';
import { Product } from './product/product.model';

@Component({
  // selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // tslint:disable-next-line:component-selector
  selector: 'inventory-app-root',
  // template: `<div class="inventory-app">
  //               (Products will go here soon)
  //           </div>`,
  templateUrl: './app.component.html'
})
export class AppComponent {
  product: Product;

  constructor() {
    // tslint:disable-next-line:prefer-const
    let newProduct = new Product(
      'NICEHAT',
      'A nice black hat',
      '/assets/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99
    );

    this.product = newProduct;
  }
}
