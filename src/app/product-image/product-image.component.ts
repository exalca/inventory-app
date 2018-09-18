import { Product } from '../product.model';
import { Component, Input, HostBinding } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-image',
  template: `
   <img class="product-image" [src]="product.imageUrl">`
})
export class ProductImageComponent {
  constructor() {}
  @Input()
  product: Product;
  @HostBinding('attr.class')
  cssClass = 'ui small image';
}
