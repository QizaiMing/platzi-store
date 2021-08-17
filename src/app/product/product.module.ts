import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [ProductComponent],
})
export class ProductModule {}
