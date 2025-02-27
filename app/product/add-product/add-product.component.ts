import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgbNavModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  _frmGroup: UntypedFormGroup;
 
  
  constructor(private formBuilder:UntypedFormBuilder, ) {
    this._frmGroup = this.formBuilder.group({
     code: [null, [Validators.required]],
     nm: [null, [Validators.required,Validators.maxLength(20),Validators.minLength(2)]],
     categoryId : [null,[Validators.required]],
     companyId : [null,[Validators.required]],
     stock: [null, [Validators.required]],
     rt: [null, [Validators.required]],
     e_date: [null, [Validators.required]],
     m_date : [null, [Validators.required]],
     description : [null,[Validators.maxLength(50),Validators.minLength(2)]]
     
    });
    
  }
 
  // save(){
  //   this.http.post(this.apiUrl + 'api/Job', this._JloginForm.value).subscribe({
  //     next: () => {
  //       Swal.fire(' Save Record')
  //     },
  //     error: (err) => {
  //       console.error(err)
  //     }
  //   })
  // }
   ngOnInit(): void{
     
  }
    
 
 
  
 
  get f() {return this._frmGroup.controls; }
}