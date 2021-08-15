import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products!: Product[];

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }


  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }
}
