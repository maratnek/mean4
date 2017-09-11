var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
var StockService = (function () {
    function StockService(_http) {
        this._http = _http;
        this.stockName = '';
    }
    StockService.prototype.getCurrentStock = function () {
        return this.stockName;
    };
    StockService.prototype.setCurrentStock = function (stockName) {
        this.stockName = stockName;
    };
    StockService.prototype.createStock = function (name, callback) {
        this.stockName = name;
        this._http.get("/api/create?name=" + name)
            .subscribe(function (result) { return callback(!result.ok); });
    };
    StockService.prototype.configStock = function (config, callback) {
        this._http.post("/api/stock-config", config)
            .subscribe(function (result) { return callback(!result.ok); });
    };
    StockService.prototype.getStockData = function () {
        var _this = this;
        return this._http.get("/api/stock-data")
            .map(function (result) { return _this.result = result.json().data; });
    };
    StockService.prototype.getStock = function () {
        var _this = this;
        return this._http.get("/api/stocks")
            .map(function (result) { return _this.result = result.json().data; });
    };
    StockService.prototype.addCatalog = function (catalog, callback) {
        this._http.post("/api/add-catalog", catalog)
            .subscribe(function (result) { return callback(!result.ok); });
    };
    StockService.prototype.deleteCatalog = function (name, callback) {
        this._http.get("/api/delete-catalog?name=" + name)
            .subscribe(function (result) { return callback(!result.ok); });
    };
    StockService.prototype.getCatalogs = function () {
        var _this = this;
        return this._http.get("/api/catalogs")
            .map(function (result) { return _this.result = result.json().data; });
    };
    // Service for product
    StockService.prototype.createProduct = function (dataProduct, callback) {
        console.log(dataProduct.dataTable);
        this._http.post("/api/create-product", dataProduct)
            .subscribe(function (result) { return callback(!result.ok); });
    };
    StockService.prototype.getProducts = function () {
        var _this = this;
        return this._http.get("/api/products")
            .map(function (result) { return _this.result = result.json().data; });
    };
    return StockService;
}());
StockService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], StockService);
export { StockService };
//# sourceMappingURL=stock.service.js.map