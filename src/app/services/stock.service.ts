import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StockService {

  result:any;
  stockName: string = null;
  active: boolean = false;

  constructor(private _http: Http) {
    this.loadStock();
  }

  // Use Local Storage for the save current stock
  storeStockData(stockName) {
    localStorage.setItem('currentStock', stockName);
  }

  loadStock(){
    this.stockName = "";
    this.IsActive().subscribe(result => {
        if (result)
          console.log("Observable IsActive true");
          this.active = true;
          this.stockName = localStorage.getItem('currentStock');
      });
  }

  IsActive():Observable<boolean>{
    const stock = localStorage.getItem('currentStock');
    // find in DB
    if (stock)
      return this._http.get("/api/stock?name=" + stock)
        .map(result => {
          if (result.json().data)
            return true;
        });
    else
      this.ExitCurrentStock();
    return Observable.from([false]);
  }

  ExitCurrentStock():void{
    this.stockName = null;
    localStorage.removeItem('currentStock');
  }

  IsExistStock():boolean{
    return this.stockName && this.stockName.length !== 0;
  }

  getCurrentStock(){
    return this.stockName;
  }

  setCurrentStock(stockName: string){
    this.storeStockData(stockName);
    this.stockName = stockName;
  }

// Service for Stock
  createStock(name:string, callback){
    this.stockName = name;
    this._http.get("/api/create?name=" + name)
      .subscribe(result => callback(!result.ok) );
  }

  configStock(config, callback){
    this._http.post("/api/stock-config",config)
      .subscribe(result => callback(!result.ok) );
  }

  getStock() {
    return this._http.get("/api/stocks")
    .map(result => this.result = result.json().data);
  }

  // Service for Goods
  getStockGoods() {
    return this._http.get("/api/stock-goods?name=" + this.stockName)
    .map(result => this.result = result.json().data);
  }

  incomeGoods(goods, callback){
    this._http.post("/api/income-goods", goods)
      .subscribe(result => callback(!result.ok));
  }

  expenseGoods(goods, callback){
    this._http.post("/api/expense-goods", goods)
      .subscribe(result => callback(!result.ok));
  }

  // Service for Catalogs
  addCatalog(catalog, callback){
    catalog.stockName = this.stockName;
    this._http.post("/api/add-catalog", catalog)
      .subscribe(result => callback(!result.ok));
  }

  deleteCatalog(name:string, callback){
    this._http.get("/api/delete-catalog?name=" + name + "&stockName="+this.stockName)
      .subscribe(result => callback(!result.ok) );
  }

  getCatalogs() {
    return this._http.get("/api/catalogs?stockName="+this.stockName)
      .map(result => this.result = result.json().data);
  }

  getCatalogById(_id) {
    console.log('service', _id);
    return this._http.get("/api/catalog?id="+_id+"&stockName="+this.stockName)
      .map(result => this.result = result.json().data);
  }

  // Service for product
  createProduct(dataProduct, callback){
    console.log(dataProduct.dataTable);
    dataProduct.stockName = this.stockName;
    this._http.post("/api/create-product", dataProduct)
      .subscribe(result => callback(!result.ok));
  }
  getProducts(){
    return this._http.get("/api/products?stockName="+this.stockName)
      .map(result => this.result = result.json().data);
  }

}
