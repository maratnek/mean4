var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { StockService } from '../../../services/stock.service';
import 'rxjs';
var ProductTableComponent = (function () {
    function ProductTableComponent(_dataService) {
        this._dataService = _dataService;
        this.onEdit = new EventEmitter();
        // products: Subject<any[]> = new Subject<any[]>();
        this.products = [];
        this.load = true;
    }
    Object.defineProperty(ProductTableComponent.prototype, "change", {
        set: function (isChange) {
            if (isChange) {
                console.log('change');
                this.ngOnInit();
            }
        },
        enumerable: true,
        configurable: true
    });
    ProductTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getProducts().subscribe(function (data) {
            _this.products = data;
            console.log(_this.products);
            setTimeout(function () { _this.load = false; }, 1000);
            _this.products.map(function (data) { return data.show = false; });
        });
        console.log(this.products);
    };
    return ProductTableComponent;
}());
__decorate([
    Output(),
    __metadata("design:type", Object)
], ProductTableComponent.prototype, "onEdit", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ProductTableComponent.prototype, "change", null);
ProductTableComponent = __decorate([
    Component({
        selector: 'product-table',
        templateUrl: './product-table.component.html',
        styleUrls: ['./product-table.component.scss']
    }),
    __metadata("design:paramtypes", [StockService])
], ProductTableComponent);
export { ProductTableComponent };
//# sourceMappingURL=product-table.component.js.map