import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyComponent } from '../add-company/add-company.component';

@Component({
  selector: 'app-header-company',
  standalone: true,
  imports: [CommonModule,AddCompanyComponent],
  templateUrl: './header-company.component.html',
  styleUrls: ['./header-company.component.css']
})
export class HeaderCompanyComponent {
active = 1
}
