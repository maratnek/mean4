import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService {

  result:any;
  stockName: string = '';

  constructor(private _http: Http) { }

  IsExistStock():boolean{
    return this.stockName.length !== 0;
  }

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

  getStockGoods() {
    return this._http.get("/api/stock-goods?name=" + this.stockName)
    .map(result => this.result = result.json().data);
  }

  incomeGoods(goods, callback){
    this._http.post("/api/income-goods", goods)
      .subscribe(result => callback(!result.ok));
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
