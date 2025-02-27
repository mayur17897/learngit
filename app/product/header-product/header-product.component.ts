import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from '../add-product/add-product.component';
import { DetailProductComponent } from '../detail-product/detail-product.component';

@Component({
  selector: 'app-header-product',
  standalone: true,
  imports: [CommonModule,NgbNavModule,AddProductComponent,DetailProductComponent],
  templateUrl: './header-product.component.html',
  styleUrls: ['./header-product.component.css']
})
export class HeaderProductComponent {
active = 1
}
