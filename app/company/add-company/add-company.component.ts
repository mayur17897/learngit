import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-add-company',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgbNavModule,FormsModule],
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {
  _frmGroup: FormGroup;
 
  constructor(private formBuilder:FormBuilder, 
    private service : CompanyService
  ) {
    this._frmGroup = this.formBuilder.group({ 
     nm: [null, [Validators.required,Validators.maxLength(20),Validators.minLength(2)]],
     description : [null,[Validators.maxLength(100),Validators.minLength(2)]]  
    });
  }

  OnSubmit() {
    console.log(this._frmGroup.value)

    this.service.Add(this._frmGroup.value)
      .subscribe({
        next: (res: any) => {
          console.log(res) 
          alert('Company Save')
          this._frmGroup.reset()    
        },
        error: err => {
          console.log(err);
        }
      });
  }

  get f() {return this._frmGroup.controls; }
}
