import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService {

  result:any;

  constructor(private _http: Http) { }

  getStock() {
    return this._http.get("/api/stocks")
      .map(result => this.result = result.json().data);
  }

  createStock(name:string, calback){
    this._http.get("create-stock")
      .map(result => this.result = result.json().data);
    calback(this.result);
  }

  defaultConfig() {
    console.log('Create stock for the default config');
  }

}
