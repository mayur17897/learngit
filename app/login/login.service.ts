import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl = environment.apiUrl + "api/Users";

  constructor(
    private http: HttpClient
  ) { }

  login(user: any) {

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this._loginUrl+"/UserLogin", user, { headers })
     .pipe(map(data=>data as any));
  }


}
