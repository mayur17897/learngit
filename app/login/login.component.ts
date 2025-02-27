import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'body',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = "Login";
  IsLoggedIn: boolean = false;
  errorMessage: string = "";
  btnLogin: string = "Log In";
  IsSubmit: boolean = false;
  islogin=false
  
  
  _loginForm: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder,
    private service : LoginService,
     private _router: Router) {
    this._loginForm = this.formBuilder.group({
      unm: ['', [Validators.required,Validators.maxLength(5),Validators.minLength(2)]],
      pwd: ['', [Validators.required]]
  
    })
    
  }
  login() {
 
    if (this._loginForm.invalid) {
      this.errorMessage = "Please fill in all required fields.";
      return;
    }
    let payload ={
      unm:this._loginForm.value.unm,
      pwd:this._loginForm.value.pwd
    }
  
    this.IsSubmit = true;
    this.btnLogin = "Logging in..."; // Show loading state
  
    this.service.login(payload)
      .subscribe({
        next: (res: any) => {
          this.IsLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true'); // Optional localStorage
          this._router.navigate(['home/index']);
        },
        error: err => {
          this.btnLogin = "Log In"; // Reset button
          this.IsSubmit = false; // Re-enable form
  
          // Show error message to the user
          this.errorMessage = err.error.errors?.[0]?.message || "An error occurred. Please try again.";
          console.error(err);
        }
      });
  }
  
  
  
  get f() {return this._loginForm.controls; }
}
