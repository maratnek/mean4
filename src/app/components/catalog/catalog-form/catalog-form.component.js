var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { StockService } from '../../../services/stock.service';
import { FormControl } from '@angular/forms';
import 'rxjs';
var CatalogFormComponent = (function () {
    function CatalogFormComponent(_dataService) {
        this._dataService = _dataService;
        this.catalog = {};
        this.edit = false;
        this.measures = [
            { name: "Вес", ms: "кг." },
            { name: "Длина", ms: "метр" },
            { name: "Количество", ms: "шт." }
        ];
        this.states = [];
    }
    CatalogFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stateControl = new FormControl();
        for (var i = 65; i < 26 + 65; i++)
            this.states.push(String.fromCharCode(i));
        this.filteredStates = this.stateControl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
        // this.filteredStates.map(name=>console.log(name));
    };
    CatalogFormComponent.prototype.onSubmit = function (addNewCatalog) {
        console.log(addNewCatalog.form.valid);
        if (addNewCatalog.form.valid) {
            this.catalog.edit = this.edit;
            this._dataService.addCatalog(this.catalog, function (err) {
                if (err)
                    console.log('Not add new catalog!!!');
                else
                    addNewCatalog.form.reset();
            });
        }
    };
    CatalogFormComponent.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return s.toLowerCase().indexOf(val.toLowerCase()) === 0; })
            : this.states;
    };
    return CatalogFormComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object)
], CatalogFormComponent.prototype, "catalog", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CatalogFormComponent.prototype, "edit", void 0);
CatalogFormComponent = __decorate([
    Component({
        selector: 'catalog-form',
        templateUrl: './catalog-form.component.html',
        styleUrls: ['./catalog-form.component.scss']
    }),
    __metadata("design:paramtypes", [StockService])
], CatalogFormComponent);
export { CatalogFormComponent };
//# sourceMappingURL=catalog-form.component.js.map