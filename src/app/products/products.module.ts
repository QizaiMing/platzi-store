import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from '../product/product.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductModule, ProductsRoutingModule],
})
export class ProductsModule {}
