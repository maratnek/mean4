import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService {

  result:any;
  stockName: string = '';

  constructor(private _http: Http) { }

  getCurrentStock(){
    return this.stockName;
  }

  setCurrentStock(stockName: string){
    this.stockName = stockName;
  }

  createStock(name:string, callback){
    this.stockName = name;
    this._http.get("/api/create?name=" + name)
      .subscribe(result => callback(!result.ok) );
  }

  configStock(config, callback){
    this._http.post("/api/stock-config",config)
      .subscribe(result => callback(!result.ok) );
  }

  getStockData() {
    return this._http.get("/api/stock-data")
    .map(result => this.result = result.json().data);
  }

  getStock() {
    return this._http.get("/api/stocks")
    .map(result => this.result = result.json().data);
  }

  addCatalog(catalog, callback){
    this._http.post("/api/add-catalog", catalog)
      .subscribe(result => callback(!result.ok));
  }

  deleteCatalog(name:string, callback){
    this._http.get("/api/delete-catalog?name=" + name)
      .subscribe(result => callback(!result.ok) );
  }

  getCatalogs() {
    return this._http.get("/api/catalogs")
      .map(result => this.result = result.json().data);
  }

  // Service for product
  createProduct(dataProduct, callback){
    console.log(dataProduct.dataTable);
    this._http.post("/api/create-product", dataProduct)
      .subscribe(result => callback(!result.ok));
  }
  getProducts(){
    return this._http.get("/api/products")
      .map(result => this.result = result.json().data);
  }

}
