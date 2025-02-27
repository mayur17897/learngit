import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SellService } from '../sell.service';
import { DataService } from '../data.service';
import { StartsellAddComponent } from "../startsell-add/startsell-add.component";
import { startWith } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgSelectModule, FormsModule],
  
})

export class CustomerComponent implements OnInit {

  @Output() customerAdded = new EventEmitter<any>();
  _frmGroup: FormGroup;
custType:any;
type: any[]=[{id:0,name:'Existing'},{id:1,name:'New'}];
  constructor(private formBuilder:FormBuilder,private sellService:SellService,private dataService:DataService ) {
    this._frmGroup = this.formBuilder.group({
     nm: [null, [Validators.required,Validators.maxLength(20),Validators.minLength(2)]],
     mobileNo: [null, [Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
    });
  }


  customerList:any=[]=[];
 customerListAll:any[]=[]
isNew=true;

  onTypeChange(data:any){
    
if(data==0){
  this.isNew =false;

}
else{
  this.isNew =true;
  // this.sellService.getCustomer().subscribe((res:any)=>{
  //   this.customerListAll = res
  //   this.customerList=res.map((item:any)=>{
  //     this.type=[{id:0,name:'Existing'},{id:1,name:'New'}];
  //     return {id:item.id,name:item.customerName +' '+item.mobile};
     
  //   });
 // });
}

  }
  ngOnInit(): void {
 this.custType=1;
 this.sellService.getCustomer().subscribe((res:any)=>{
  this.customerListAll = res
  this.customerList=res.map((item:any)=>{
    this.type=[{id:0,name:'Existing'},{id:1,name:'New'}];
    return {id:item.id,name:item.customerName +' '+item.mobile};
   
  });
});
  }


  selectCustomer(customer: any) {
    // Emit the selected customer to the parent
   
  }

  SaveCustomer()
  {
    this.sellService.SaveCustomer(this._frmGroup.value).subscribe((res:any)=>{
      alert('Customer Saved');
    
      this.customerAdded.emit(res.cust);
      this.type=[{id:0,name:'Existing'},{id:1,name:'New'}];
      this._frmGroup.reset()
    });
  }

 
  onDataTranferSell(data:any)
  {
 
  const customer =  this.customerListAll.find((x:any)=>x.id == data)
  this.customerAdded.emit(customer);
  }

get f()
{
  return this._frmGroup.controls;
}

}
