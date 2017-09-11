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
import { StockService } from '../../services/stock.service';
import 'rxjs';
var ProductionComponent = (function () {
    function ProductionComponent(_dataService) {
        this._dataService = _dataService;
        this.isSubmit = false;
        this.product = {};
        this.menuToolbarActive = 1;
    }
    ProductionComponent.prototype.ngOnInit = function () {
    };
    ProductionComponent.prototype.onSubmit = function (createProduct) {
        var _this = this;
        console.log(createProduct);
        console.log(createProduct.form.valid);
        if (createProduct.form.valid) {
            var dt_1 = [];
            this.dataTable.subscribe(function (data) {
                return dt_1 = data;
            }, function () { return console.log("Error create product component"); }, function () {
                _this.product.dataTable = dt_1;
                console.log(_this.product);
                _this._dataService.createProduct(_this.product, function (err) {
                    if (err)
                        console.log('Not create new product!!!');
                    else {
                        console.log('Create new product SUCCESS!!!');
                        createProduct.form.reset();
                    }
                });
            });
            this.isSubmit = true;
        }
    };
    return ProductionComponent;
}());
ProductionComponent = __decorate([
    Component({
        selector: 'app-production',
        templateUrl: './production.component.html',
        styleUrls: ['./production.component.scss']
    }),
    __metadata("design:paramtypes", [StockService])
], ProductionComponent);
export { ProductionComponent };
//# sourceMappingURL=production.component.js.map