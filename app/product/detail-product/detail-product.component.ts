import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {

  PRODUCT : any[] = []
  apiUrl ='http://localhost:5019/'



  constructor(
    private http: HttpClient,
     private modalService: NgbModal) {
   

  
  }

  ngOnInit(): void{
    this.http.get(`${this.apiUrl}api/Customer`).subscribe({
      next:(res:any) => {
        console.log(res)
        this.PRODUCT=res
      },
      error:(err:any) =>{
        console.log(err)
      }
    })
  }
}
