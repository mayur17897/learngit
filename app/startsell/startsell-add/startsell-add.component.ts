import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from "../customer/customer.component";
import { DataService } from '../data.service';
import { SellService } from '../sell.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProductService } from 'src/app/product/product.service';
import { ProductSaledetails } from '../productSaleDetails';


@Component({
  selector: 'app-startsell-add',
  templateUrl: './startsell-add.component.html',
  styleUrls: ['./startsell-add.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbNavModule, NgSelectModule, FormsModule]
})
export class StartsellAddComponent implements OnInit {
  id = 0
  orderId = 0
  customerName = ''
  mobileNo = ''
  @Input() customer: any;
  ProductData: any[] = []
  product: any
  productAllData: any[] = []
  productList: any[] = []
  qty: number = 0
  totalAmt=0
  productCart: ProductSaledetails[] = []
  productObject: any
  index = 0
  ngOnChanges() {

    console.log('Selected Customer:', this.customer);
    debugger
    if (this.customer.id != 0) {
      this.customerName = this.customer.customerName,
        this.mobileNo = this.customer.mobile
      this.saleservice.getMaxId().subscribe((res: any) => {
        this.orderId = res
      })

    }

  }

  dt = new Date()

  constructor(private dataservice: DataService,
    private saleservice: SellService,
    private productService: ProductService) {
     
  }
  ngOnInit(): void {
    // debugger
    this.loadProduct()
    ; 
  }


  loadProduct() {
    this.productService.getProduct().subscribe((res: any) => {
      this.productAllData = res
      this.productList = this.productAllData.map((item: any) => {

        return { id: item.id, name: item.code + '-' + item.nm };

      });

    })
  }

  onTypeChange(data: any) {
    this.productObject = this.productAllData.find((x: any) => x.id == data)


  }




  addProduct() {

    let obj: ProductSaledetails =
    {
      productId: this.productObject.id,
      code: this.productObject.code,
      nm: this.productObject.nm,
      rate: this.productObject.rt,
      qty: this.qty,
      total: (this.productObject.rt * this.qty),

    }
    // Check if the product is already in the cart
    const existingIndex = this.productCart.findIndex(
      (item) => item.productId === obj.productId
    );

    if (existingIndex === -1) {
    
      this.productCart.push(obj);
    } else {
      
      this.productCart[existingIndex].qty = +this.qty; 
      this.productCart[existingIndex].total = this.qty * obj.rate
       
        this.productCart[existingIndex].qty; 
    }
   
    this.totalAmt = this.productCart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.total;
    }, 0);
    this.product = ''
    this.qty = 0

  }

  delete(i: number) {
    this.productCart.splice(i, 1);
  }

  edit(item: any, i: number) {
    this.index = i
    this.product = item.productId
    this.qty = item.qty
  }


  saveOrder()
  {
    debugger
    if(this.customer === undefined)
    {
      return alert("first add Customer")
    }
    if(this.productCart.length === 0)
    {
      return alert("Add At list One Product to Proceed")
    }
    let paylod={
      customerId:this.customer.id,
      saleDetails:this.productCart
    }
    this.saleservice.SaveOrder(paylod).subscribe((res:any)=>{
      alert("Order Registered")
      this.productCart=[]
      this.customer = null
    })

  }

}
