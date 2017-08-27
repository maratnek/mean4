import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService {

  result:any;
  stockName: String = '';

  constructor(private _http: Http) { }

  createStock(name:string, callback){
    this._http.get("/api/create?name=" + name)
      .subscribe(result => callback(!result.ok) );
  }

  configStock(config, callback){
    this._http.post("/api/stock-config",config)
      .subscribe(result => callback(!result.ok) );
  }

  addCatalog(catalog, callback){
    this._http.post("/api/add-catalog", catalog)
      .subscribe(result => callback(!result.ok));
  }

  deleteCatalog(name:string, callback){
    this._http.get("/api/delete-catalog?name=" + name)
      .subscribe(result => callback(!result.ok) );
  }

  getStock() {
    return this._http.get("/api/stocks")
      .map(result => this.result = result.json().data);
  }

  getCatalogs() {
    return this._http.get("/api/catalogs")
      .map(result => this.result = result.json().data);
  }

}
