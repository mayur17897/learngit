import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _productUrl = environment.apiUrl + "api/Product";

  constructor(
    private http: HttpClient
  ) { }

    getProduct() {
      return this.http.get<any>(this._productUrl)
       .pipe(map(data=>data as any));
    }
  
}
