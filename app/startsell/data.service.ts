import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private user = new BehaviorSubject<number>(0);
  castUser = this.user.asObservable();
   
   editUser(newUser:any){
    
     this.user.next(newUser); 
   }

}
