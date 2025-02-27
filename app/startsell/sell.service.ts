import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SellService {
  private _CustomerUrl = environment.apiUrl + "api/Customer";
  private _SaleUrl = environment.apiUrl + "api/Sale";
  constructor(
    private http: HttpClient
  ) { }

  SaveCustomer(cust: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this._CustomerUrl, cust, { headers })
     .pipe(map(data=>data as any));
  }
  SaveOrder(data: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this._SaleUrl, data, { headers })
     .pipe(map(data=>data as any));
  }
  getCustomer() {
    return this.http.get<any>(this._CustomerUrl)
     .pipe(map(data=>data as any));
  }

  getFindCustomer(id:number) {
    return this.http.get<any>(this._CustomerUrl+'/'+id)
     .pipe(map(data=>data as any));
  }

  getMaxId()
  {
    return this.http.get<any>(this._SaleUrl+'/getMaxId')
    .pipe(map(data=>data as any));
  }
}
