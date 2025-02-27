import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartsellAddComponent } from "../startsell-add/startsell-add.component";
import { CustomerComponent } from "../customer/customer.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CustomerComponent, StartsellAddComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedCustomer: any;

  onCustomerAdded(customer: any) {
    this.selectedCustomer = customer; // Store the selected customer
  }


}
