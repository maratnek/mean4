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

  createStock(name:string, callback){
    this._http.get("/api/create?name=" + name)
      .subscribe(result => callback(!result.ok) );
  }

  configStock(config, callback){
    this._http.post("/api/stock-config",config)
      .subscribe(result => callback(!result.ok) );
  }

  createNewGlossary(glossary){
    console.log('new glossary');
  }

  defaultConfig() {
    console.log('Create stock for the default config');
  }

}
