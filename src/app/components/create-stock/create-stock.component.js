var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../../services/stock.service';
import 'rxjs/add/operator/switchMap';
var CreateStockComponent = (function () {
    // Create an instance of the DataService through dependency injection
    function CreateStockComponent(_dataService, router) {
        var _this = this;
        this._dataService = _dataService;
        this.router = router;
        // Define a users property to hold our user data
        this.stocks = [];
        this.create = false;
        this.name = '';
        this.stockName = '';
        this.success = false;
        this._dataService.getStock()
            .subscribe(function (res) { _this.stocks = res; console.log(res); });
    }
    CreateStockComponent.prototype.ngOnInit = function () {
    };
    CreateStockComponent.prototype.createStockName = function (stockName) {
        var _this = this;
        this._dataService.createStock(stockName, function (err) {
            if (err)
                console.log('Не удалось создать склад: ', stockName);
            else {
                _this.success = true;
                console.log('Склад ', stockName, ' создан');
                console.log('Сконфигурируте');
            }
        });
    };
    CreateStockComponent.prototype.correctName = function () {
        if (this.stockName.length)
            return true;
        return false;
    };
    CreateStockComponent.prototype.createStockConfig = function () {
        var _this = this;
        console.log('create stock config');
        if (this.correctName()) {
            var config_1 = {
                name: this.stockName,
                price: true
            };
            this._dataService.configStock(config_1, function (err) {
                if (err)
                    console.log('Не удалось создать конфигурацию для склада: ', config_1);
                else {
                    console.log('Склад сконфигурирован: config', config_1);
                    _this.router.navigate(['/catalog']);
                }
            });
        }
        else {
            console.log('Некорректное имя для Склада');
        }
    };
    return CreateStockComponent;
}());
CreateStockComponent = __decorate([
    Component({
        selector: 'app-create-stock',
        templateUrl: './create-stock.component.html',
        styleUrls: ['./create-stock.component.scss']
    }),
    __metadata("design:paramtypes", [StockService, Router])
], CreateStockComponent);
export { CreateStockComponent };
//# sourceMappingURL=create-stock.component.js.map