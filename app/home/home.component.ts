import { Component } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isSidemenuShow=true
  private _auth: any;
  private _rout: any;

  loggedOutmnu() {
    console.log("log out");
    this._auth.loggedOut();
    this._rout.navigate(['']);
  }
}
