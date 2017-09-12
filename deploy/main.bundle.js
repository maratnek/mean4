webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_create_stock_create_stock_component__ = __webpack_require__("../../../../../src/app/components/create-stock/create-stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_main_stock_main_stock_component__ = __webpack_require__("../../../../../src/app/components/main-stock/main-stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_stock_stock_component__ = __webpack_require__("../../../../../src/app/components/stock/stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_catalog_catalog_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_production_production_component__ = __webpack_require__("../../../../../src/app/components/production/production.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_config_config_component__ = __webpack_require__("../../../../../src/app/components/config/config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_stock_guard__ = __webpack_require__("../../../../../src/app/guards/stock.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/create', pathMatch: 'full' },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_2__components_create_stock_create_stock_component__["a" /* CreateStockComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_3__components_main_stock_main_stock_component__["a" /* MainStockComponent */] },
    { path: 'catalog', component: __WEBPACK_IMPORTED_MODULE_5__components_catalog_catalog_component__["a" /* CatalogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_stock_guard__["a" /* StockGuard */]] },
    { path: 'production', component: __WEBPACK_IMPORTED_MODULE_6__components_production_production_component__["a" /* ProductionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_stock_guard__["a" /* StockGuard */]] },
    { path: 'stock', component: __WEBPACK_IMPORTED_MODULE_4__components_stock_stock_component__["a" /* StockComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_stock_guard__["a" /* StockGuard */]] },
    { path: 'config', component: __WEBPACK_IMPORTED_MODULE_7__components_config_config_component__["a" /* ConfigComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_stock_guard__["a" /* StockGuard */]] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_create_stock_create_stock_component__ = __webpack_require__("../../../../../src/app/components/create-stock/create-stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_main_stock_main_stock_component__ = __webpack_require__("../../../../../src/app/components/main-stock/main-stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_stock_stock_component__ = __webpack_require__("../../../../../src/app/components/stock/stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_catalog_catalog_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_production_production_component__ = __webpack_require__("../../../../../src/app/components/production/production.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_catalog_catalog_form_catalog_form_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-form/catalog-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_catalog_catalog_table_catalog_table_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-table/catalog-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_production_product_create_product_create_component__ = __webpack_require__("../../../../../src/app/components/production/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_production_product_table_product_table_component__ = __webpack_require__("../../../../../src/app/components/production/product-table/product-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_stock_stock_table_stock_table_component__ = __webpack_require__("../../../../../src/app/components/stock/stock-table/stock-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_stock_stock_income_stock_income_component__ = __webpack_require__("../../../../../src/app/components/stock/stock-income/stock-income.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_config_config_component__ = __webpack_require__("../../../../../src/app/components/config/config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_stock_guard__ = __webpack_require__("../../../../../src/app/guards/stock.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_stock_stock_expense_stock_expense_component__ = __webpack_require__("../../../../../src/app/components/stock/stock-expense/stock-expense.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Angular material

// import {CdkTableModule} from '@angular/cdk';

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_create_stock_create_stock_component__["a" /* CreateStockComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_main_stock_main_stock_component__["a" /* MainStockComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_stock_stock_component__["a" /* StockComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_catalog_catalog_component__["a" /* CatalogComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_production_production_component__["a" /* ProductionComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_catalog_catalog_form_catalog_form_component__["a" /* CatalogFormComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_catalog_catalog_table_catalog_table_component__["a" /* CatalogTableComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_production_product_create_product_create_component__["a" /* ProductCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_production_product_table_product_table_component__["a" /* ProductTableComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_stock_stock_table_stock_table_component__["a" /* StockTableComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_stock_stock_income_stock_income_component__["a" /* StockIncomeComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_config_config_component__["a" /* ConfigComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_stock_stock_expense_stock_expense_component__["a" /* StockExpenseComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdSortModule */],
            // CdkTableModule,
            __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__services_stock_service__["a" /* StockService */], __WEBPACK_IMPORTED_MODULE_23__guards_stock_guard__["a" /* StockGuard */], __WEBPACK_IMPORTED_MODULE_3__services_stock_service__["a" /* StockService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-form/catalog-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{edit? 'Редактировать':'Добавить'}} элемент {{catalog.name}}</h1>\n<md-card>\n  <form #addNewCatalog=\"ngForm\" (ngSubmit)=\"onSubmit(addNewCatalog)\" align=\"\">\n    <md-input-container >\n      <input mdInput type=\"text\" name=\"name\" [(ngModel)]=\"catalog.name\" required placeholder=\"Наименование товара\">\n    </md-input-container>\n    <br>\n\n    <md-select name=\"measure\" [(ngModel)]=\"catalog.measure\" required placeholder=\"Единица измерения\">\n      <md-option *ngFor=\"let measure of measures\" [value]=\"measure.ms\">\n        {{measure.ms}}\n      </md-option>\n    </md-select>\n    <br>\n\n    <md-input-container align=\"center\">\n      <span mdPrefix style=\"padding-right: 20px\"><fa name='rub'></fa></span>\n      <input mdInput type=\"number\" name=\"price\" [(ngModel)]=\"catalog.price\" required placeholder=\"Цена\" align=\"\">\n      <span mdSuffix>за {{catalog.measure}}</span>\n    </md-input-container>\n    <br>\n\n    <md-input-container>\n      <input mdInput type=\"text\" [mdAutocomplete]=auto\n      [(ngModel)]=\"catalog.storePlace\" [formControl]=\"stateControl\" pattern=\"[A-Z]\"\n      placeholder=\"Сектор хранения\">\n    </md-input-container>\n    <md-autocomplete #auto=\"mdAutocomplete\">\n      <md-option *ngFor=\"let state of states\" [value]=\"state\">\n        {{ state }}\n      </md-option>\n    </md-autocomplete>\n    <br>\n\n    <label for=\"suppliers\">Добавить поставщика  </label>\n    <button type=\"button\" md-raised-button name=\"suppliers\" (click)=\"isSuppliersCheck=!isSuppliersCheck\">\n      <fa name=\"truck\"></fa>\n      <fa *ngIf=\"!isSuppliersCheck\" name=\"plus\"></fa>\n      <fa *ngIf=\"isSuppliersCheck\" name=\"minus\"></fa>\n    </button>\n    <br>\n    <ng-container *ngIf=\"isSuppliersCheck\">\n      <md-input-container>\n        <input mdInput type=\"text\" name=\"suppliersName\" [(ngModel)]=\"catalog.suppliersName\" placeholder=\"Имя поставщика\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput type=\"tel\" name=\"suppliersTel\" [(ngModel)]=\"catalog.suppliersTel\" placeholder=\"Телефон\">\n      </md-input-container>\n    </ng-container>\n    <br>\n\n    <md-input-container>\n      <input mdInput #postalCode maxlength=\"10\" type=\"number\" disabled placeholder=\"Штрих код\" value=\"0000000000\">\n      <md-hint align=\"end\">{{postalCode.value.length}} / 10</md-hint>\n    </md-input-container>\n\n    <md-card-actions>\n      <button  md-raised-button [disabled]=\"!addNewCatalog.form.valid\"  type=\"submit\"  name=\"button\">\n        {{edit? 'Редактировать':'Добавить'}}\n      </button>\n      <button  md-raised-button  type=\"reset\"  name=\"button\">Очистить</button>\n    </md-card-actions>\n  </form>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-form/catalog-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-form/catalog-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        this.stateControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormControl */]();
        for (var i = 65; i < 26 + 65; i++)
            this.states.push(String.fromCharCode(i));
        this.filteredStates = this.stateControl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
        this.filteredStates.map(function (name) { return console.log(name); });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], CatalogFormComponent.prototype, "catalog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean)
], CatalogFormComponent.prototype, "edit", void 0);
CatalogFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'catalog-form',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog-form/catalog-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog-form/catalog-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */]) === "function" && _a || Object])
], CatalogFormComponent);

var _a;
//# sourceMappingURL=catalog-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-table/catalog-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <h1>Каталог товаров</h1>\n  <div class=\"my-container mat-elevation-z8\">\n    <!-- <div class=\"example-loading-shade\" *ngIf=\"dataSource.isLoadingResults || dataSource.isRateLimitReached\">\n      <md-spinner *ngIf=\"dataSource.isLoadingResults\"></md-spinner>\n      <div class=\"example-rate-limit-reached\" *ngIf=\"dataSource.isRateLimitReached\">\n        GitHub's API rate limit has been reached. It will be reset in one minute.\n      </div>\n    </div> -->\n\n    <div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\">\n      <md-input-container floatPlaceholder=\"never\">\n        <input mdInput #filter placeholder=\"Filter users\">\n      </md-input-container>\n    </div>\n    <!-- <div class=\"example-header example-selection-header\"\n      *ngIf=\"!selection.isEmpty()\">\n      {{selection.selected.length}}\n      {{selection.selected.length == 1 ? 'user' : 'users'}}\n      selected\n    </div> -->\n\n    <md-table #table [dataSource]=\"dataSource\" mdSort>\n    <!-- mdSortActive=\"created\" mdSortDisableClear mdSortDirection=\"asc\"> -->\n\n    <!-- Checkbox Column -->\n    <ng-container mdColumnDef=\"select\">\n      <md-header-cell *mdHeaderCellDef>\n        <md-checkbox (change)=\"$event ? masterToggle() : null\"\n                     [checked]=\"isAllSelected()\"\n                     [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </md-checkbox>\n      </md-header-cell>\n      <md-cell *mdCellDef=\"let row\">\n        <md-checkbox (click)=\"$event.stopPropagation()\"\n                     (change)=\"$event ? selection.toggle(row.name) : null\"\n                     [checked]=\"selection.isSelected(row.name)\">\n        </md-checkbox>\n      </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"name\">\n      <md-header-cell *mdHeaderCellDef md-sort-header> Имя </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.name}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"measure\">\n      <md-header-cell *mdHeaderCellDef md-sort-header> Ед.Изм. </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.measure}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"price\">\n      <md-header-cell *mdHeaderCellDef md-sort-header> Цена </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.price}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"storePlace\">\n      <md-header-cell *mdHeaderCellDef md-sort-header> Место Хр. </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.storePlace}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"delete\">\n      <md-header-cell *mdHeaderCellDef></md-header-cell>\n      <md-cell *mdCellDef=\"let row\" align=\"center\">\n        <button md-icon-button\n         (click)=\"delete(row.name)\">\n          <fa style=\"color:red\" name=\"trash-o\"></fa>\n        </button>\n      </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"edit\">\n      <md-header-cell *mdHeaderCellDef></md-header-cell>\n      <md-cell *mdCellDef=\"let row\"\n        (click)=\"edit(row)\">\n        <button md-icon-button>\n          <fa style=\"color:green\" name=\"pencil\"></fa>\n        </button>\n      </md-cell>\n    </ng-container>\n\n    <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n    <md-row *mdRowDef=\"let row; columns: displayedColumns;\"\n      [class.example-selected-row]=\"selection.isSelected(row.name)\"\n      (click)=\"selection.toggle(row.name)\">\n    </md-row>\n</md-table>\n  <div class=\"example-no-results\"\n       [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n       Нет данных по данному фильтру.\n  </div>\n\n  <md-paginator #paginator\n                [length]=\"dataSource.filteredData.length\"\n                [pageIndex]=\"0\"\n                [pageSize]=\"5\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </md-paginator>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-table/catalog-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  position: relative; }\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.example-table {\n  overflow: auto;\n  min-height: 300px; }\n\n.mat-column-title {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden; }\n\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px; }\n\n.mat-column-created {\n  max-width: 124px; }\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-table/catalog-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/@angular/cdk/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogTableComponent; });
/* unused harmony export CatalogDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CatalogTableComponent = (function () {
    function CatalogTableComponent(_dataService) {
        this._dataService = _dataService;
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */]();
        this.displayedColumns = ['name', 'measure', 'price', 'storePlace', 'delete', 'edit'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* SelectionModel */](true, []);
        this.catalog = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    CatalogTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getCatalogs().subscribe({
            next: function (value) { _this.catalog.next(value); console.log(value); }
        });
        this.dataSource = new CatalogDataSource(this.catalog, this.sort, this.paginator);
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    CatalogTableComponent.prototype.delete = function (name) {
        var _this = this;
        console.log('delete - ', name);
        this._dataService.deleteCatalog(name, function (err) {
            if (err)
                console.log('Не удалось удалить каталог: ', name);
            else {
                _this._dataService.getCatalogs().subscribe({
                    next: function (value) { return _this.catalog.next(value); }
                });
                // this.success = true;
                console.log('Каталог ' + name + ' успешно удален.');
            }
        });
    };
    CatalogTableComponent.prototype.edit = function (catalog) {
        console.log('edit - ', catalog);
        var copy = Object.assign({}, catalog);
        this.onEdit.emit(copy);
    };
    CatalogTableComponent.prototype.isAllSelected = function () {
        if (!this.dataSource) {
            return false;
        }
        if (this.selection.isEmpty()) {
            return false;
        }
        if (this.filter.nativeElement.value) {
            return this.selection.selected.length == this.dataSource.renderedData.length;
        }
        else {
            return this.selection.selected.length == this.catalog.value.length;
        }
    };
    CatalogTableComponent.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.renderedData.forEach(function (data) { return _this.selection.select(data.name); });
        }
        else {
            this.catalog.value.forEach(function (data) { return _this.selection.select(data.name); });
        }
    };
    return CatalogTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], CatalogTableComponent.prototype, "onEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSort */]) === "function" && _a || Object)
], CatalogTableComponent.prototype, "sort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdPaginator */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdPaginator */]) === "function" && _b || Object)
], CatalogTableComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* ElementRef */]) === "function" && _c || Object)
], CatalogTableComponent.prototype, "filter", void 0);
CatalogTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'catalog-table',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog-table/catalog-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog-table/catalog-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_stock_service__["a" /* StockService */]) === "function" && _d || Object])
], CatalogTableComponent);

var CatalogDataSource = (function (_super) {
    __extends(CatalogDataSource, _super);
    // catalog: Observable<CatalogData[]>;
    function CatalogDataSource(
        // private _dataService: StockService,
        catalog, _sort, _paginator) {
        var _this = _super.call(this) || this;
        _this.catalog = catalog;
        _this._sort = _sort;
        _this._paginator = _paginator;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        _this.filteredData = [];
        _this.renderedData = [];
        _this.resultsLength = 0;
        _this.isLoadingResults = false;
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(CatalogDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    CatalogDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.catalog,
            this._sort.mdSortChange,
            this._filterChange,
            this._paginator.page,
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"], displayDataChanges).startWith(null)
            .switchMap(function () {
            _this.isLoadingResults = true;
            return _this.getSortedData();
        })
            .catch(function () {
            // Catch if the GitHub API has reached its rate limit. Return empty result.
            _this.isRateLimitReached = true;
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(null);
        })
            .map(function (result) {
            // Flip flag to show that loading has finished.
            _this.resultsLength = result.length;
            _this.isLoadingResults = false;
            return result;
        })
            .map(function (result) {
            if (!result) {
                return [];
            }
            // Filter data
            _this.filteredData = result.slice().filter(function (item) {
                var searchStr = item.name.toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
            // Sort filtered data
            // const sortedData = this.sortData(this.filteredData.slice());
            var sortedData = _this.filteredData.slice();
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
            // this.isRateLimitReached = false;
            // this.resultsLength = result.total_count;
            // return result;
            // return this.readGithubResult(result);
        });
    };
    CatalogDataSource.prototype.disconnect = function () { };
    CatalogDataSource.prototype.getSortedData = function () {
        var _this = this;
        return this.catalog.map(function (data) {
            if (!_this._sort.active || _this._sort.direction == '') {
                return data;
            }
            return data.sort(function (a, b) {
                var propertyA = '';
                var propertyB = '';
                switch (_this._sort.active) {
                    case 'name':
                        _a = [a.name, b.name], propertyA = _a[0], propertyB = _a[1];
                        break;
                    case 'measure':
                        _b = [a.measure, b.measure], propertyA = _b[0], propertyB = _b[1];
                        break;
                    case 'price':
                        _c = [a.price, b.price], propertyA = _c[0], propertyB = _c[1];
                        break;
                    case 'storePlace':
                        _d = [a.storePlace, b.storePlace], propertyA = _d[0], propertyB = _d[1];
                        break;
                }
                var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
                var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    valueA = valueA.toLowerCase();
                    valueB = valueB.toLowerCase();
                }
                return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
                var _a, _b, _c, _d;
            });
        });
    };
    return CatalogDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["b" /* DataSource */]));

var _a, _b, _c, _d;
//# sourceMappingURL=catalog-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-container\">\n  <md-sidenav-container class=\"my-height\">\n    <md-sidenav #sidenav mode=\"side\" opened=\"true\">\n      <button *ngIf=\"sidenav.opened\" md-mini-fab class=\"my-fab\" (click)=\"sidenav.toggle()\">\n        <fa  name=\"times\"></fa>\n      </button>\n      <md-toolbar class=\"my-toolbar\">\n        <md-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 1\">\n          <span>Все каталоги</span>\n        </md-toolbar-row>\n\n        <md-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 2; edit = false\">\n          <span>Добавить каталог</span>\n        </md-toolbar-row>\n      </md-toolbar>\n\n    </md-sidenav>\n\n    <button *ngIf=\"!sidenav.opened\" md-mini-fab class=\"my-fab bars\" (click)=\"sidenav.toggle()\">\n      <fa  name=\"bars\"></fa>\n    </button>\n\n    <div class=\"my-container\">\n      <div [style.display]=\"menuToolbarActive === 1 ? '' : 'none'\" class=\"\">\n        <catalog-table (onEdit)=\"catalog = $event; menuToolbarActive = 2; edit = true;\"></catalog-table>\n      </div>\n\n      <div [style.display]=\"menuToolbarActive === 2 ? '': 'none'\" class=\"my-card\">\n        <catalog-form [catalog]=\"catalog\" [edit]=\"edit\"></catalog-form>\n      </div>\n    </div>\n  </md-sidenav-container>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-fab {\n  position: absolute;\n  color: white;\n  background-color: #583123;\n  left: 20px;\n  top: 20px; }\n  .my-fab.bars {\n    position: relative; }\n\n.my-toolbar {\n  padding: 0px; }\n  .my-toolbar .my-toolbar-row {\n    padding: 10px;\n    transition: 0.3s linear; }\n    .my-toolbar .my-toolbar-row:hover {\n      transition: 0.3s linear;\n      background-color: white;\n      color: #583123;\n      border: 4px #583123 solid;\n      border-left: none;\n      cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatalogComponent = (function () {
    function CatalogComponent() {
        this.catalog = {};
        this.isSuppliersCheck = false;
        this.menuToolbarActive = 1;
    }
    CatalogComponent.prototype.ngOnInit = function () {
    };
    return CatalogComponent;
}());
CatalogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-catalog',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CatalogComponent);

//# sourceMappingURL=catalog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/config/config.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-container\">\n  <md-card>\n      <h3>Конфигурация для БД</h3>\n      <p>На стадии разработки</p>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/config/config.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/config/config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigComponent = (function () {
    function ConfigComponent() {
    }
    ConfigComponent.prototype.ngOnInit = function () {
    };
    return ConfigComponent;
}());
ConfigComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-config',
        template: __webpack_require__("../../../../../src/app/components/config/config.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/config/config.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ConfigComponent);

//# sourceMappingURL=config.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-stock/create-stock.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <md-grid-list cols=\"1\" rowHeight=\"3:1\">\n  <md-grid-tile colspan=1 rowspan=1> -->\n  <div class=\"my-container\">\n    <div class=\"my-card\">\n    <md-card *ngIf=\"!success\">\n\n        <h1>Создайте склад или выберите из существующего</h1>\n\n      <md-grid-list cols=\"2\">\n        <md-grid-tile>\n          <md-card-content>\n            <md-input-container>\n              <input type=\"text\" mdInput [(ngModel)]=\"stockName\" #ctrl =\"ngModel\"  required placeholder=\"Название склада\">\n            </md-input-container>\n            <h1>{{stockName}}</h1>\n          </md-card-content>\n        </md-grid-tile>\n        <md-grid-tile>\n          <md-nav-list>\n            <md-list-item *ngFor=\"let stock of stocks\" (click)=\"EnterCurrentStock(stock)\">\n              <h3>{{stock}}</h3>\n            </md-list-item>\n          </md-nav-list>\n        </md-grid-tile>\n      </md-grid-list>\n      <md-card-actions>\n        <a md-raised-button *ngIf=\"stockName\" (keyup.enter)=\"createStockName(stockName)\" (click)=\"createStockName(stockName)\">Создать</a>\n      </md-card-actions>\n    </md-card>\n</div>\n<div class=\"my-card\">\n  <!-- </md-grid-tile> -->\n\n  <!-- <md-grid-tile colspan=1 rowspan=1> -->\n\n    <md-card *ngIf=\"success\">\n\n        <h1>Определите конфигурацию для склада: {{stockName}}</h1>\n\n      <md-card-content>\n\n      <p>\n        Создается новый склад. Конфигурация основной таблицы.\n        Или выберети конфигурацию по умолчанию\n      </p>\n    </md-card-content>\n    <md-card-actions>\n      <a md-raised-button (keyup.enter)='createStockConfig()' (click)='createStockConfig()'>По умолчанию</a>\n    </md-card-actions>\n\n    </md-card>\n\n  </div>\n  </div>\n  <!-- </md-grid-tile>\n</md-grid-list> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/create-stock/create-stock.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-stock/create-stock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateStockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
    CreateStockComponent.prototype.EnterCurrentStock = function (stock) {
        this._dataService.setCurrentStock(stock);
        this.router.navigate(['/stock']);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-create-stock',
        template: __webpack_require__("../../../../../src/app/components/create-stock/create-stock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-stock/create-stock.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_stock_service__["a" /* StockService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CreateStockComponent);

var _a, _b;
//# sourceMappingURL=create-stock.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/main-stock/main-stock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-container mat-elevation-z9\">\n  <md-table #table [dataSource]=\"dataSource\" [trackBy]=\"myTrackById\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- ID Column -->\n    <ng-container mdColumnDef=\"userId\">\n      <md-header-cell *mdHeaderCellDef> ID </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.id}} </md-cell>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container mdColumnDef=\"progress\">\n      <md-header-cell *mdHeaderCellDef> Progress </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.progress}}% </md-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container mdColumnDef=\"userName\">\n      <md-header-cell *mdHeaderCellDef> Name </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.name}} </md-cell>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container mdColumnDef=\"color\">\n      <md-header-cell *mdHeaderCellDef>Color</md-header-cell>\n      <md-cell *mdCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </md-cell>\n    </ng-container>\n\n    <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n    <md-row *mdRowDef=\"let row; columns: displayedColumns;\"></md-row>\n  </md-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/main-stock/main-stock.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-container {\n  background-color: rgba(255, 255, 255, 0.5);\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/main-stock/main-stock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/@angular/cdk/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__ = __webpack_require__("../../../../rxjs/add/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainStockComponent; });
/* unused harmony export ExampleDatabase */
/* unused harmony export ExampleDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MainStockComponent = (function () {
    function MainStockComponent() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new ExampleDatabase();
    }
    MainStockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
        setTimeout(function () {
            _this.dataSource.connect();
        }, 30);
    };
    return MainStockComponent;
}());
MainStockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-main-stock',
        template: __webpack_require__("../../../../../src/app/components/main-stock/main-stock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/main-stock/main-stock.component.scss")]
    })
], MainStockComponent);

/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
        console.log(this.dataChange);
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        console.log('render');
        return this._exampleDatabase.dataChange;
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["b" /* DataSource */]));

//# sourceMappingURL=main-stock.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n\n  <ul>\n    <li>{{stockName}}</li>\n    <!-- <li><a routerLink='/main' routerLinkActive=\"active\">Склад</a></li> -->\n    <li *ngIf=\"!stockService.IsExistStock()\"><a routerLink='/create' routerLinkActive=\"active\">Cоздание склада</a></li>\n    <li *ngIf=\"stockService.IsExistStock()\"><a routerLink='/stock' routerLinkActive=\"active\">Склад</a></li>\n    <li *ngIf=\"stockService.IsExistStock()\"><a routerLink='/catalog' routerLinkActive=\"active\">Каталог товаров</a></li>\n    <li *ngIf=\"stockService.IsExistStock()\"><a routerLink='/production' routerLinkActive=\"active\">Производство</a></li>\n    <div class=\"right\">\n      <li *ngIf=\"stockService.IsExistStock()\"><a routerLink='/config' routerLinkActive=\"active\"><fa name=\"cog\" size=\"lg\"></fa></a></li>\n      <li *ngIf=\"stockService.IsExistStock()\"><a (click)=\"onResetStock()\"><span>{{stockService.getCurrentStock()}}</span> <fa name=\"external-link\" size=\"lg\"></fa></a></li>\n      <div class=\"min-menu\">\n        <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n          <fa name=bars size=lg></fa>\n        </button>\n        <md-menu #menu=\"mdMenu\">\n          <!-- <a md-menu-item routerLink='/main' routerLinkActive=\"active\">Склад</a> -->\n          <a *ngIf=\"!stockService.IsExistStock()\" md-menu-item routerLink='/create' routerLinkActive=\"active\">Создание склада</a>\n          <a *ngIf=\"stockService.IsExistStock()\" md-menu-item routerLink='/stock' routerLinkActive=\"active\">Склад</a>\n          <a *ngIf=\"stockService.IsExistStock()\" md-menu-item routerLink='/catalog' routerLinkActive=\"active\">Каталог товаров</a>\n          <a *ngIf=\"stockService.IsExistStock()\" md-menu-item routerLink='/production' routerLinkActive=\"active\">Производство</a>\n          <a *ngIf=\"stockService.IsExistStock()\" md-menu-item routerLink='/config' routerLinkActive=\"active\"><fa name=\"cog\" size=\"lg\"></fa></a>\n          <a *ngIf=\"stockService.IsExistStock()\" md-menu-item (click)=\"onResetStock()\"><span>{{stockService.getCurrentStock()}}</span> <fa name=\"external-link\" size=\"lg\"></fa></a>\n        </md-menu>\n      </div>\n    </div>\n</ul>\n\n</nav>\n\n<div class=\"pad-top\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right {\n  float: right; }\n\n.navbar {\n  background-color: #583123;\n  width: 100%;\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0; }\n  .navbar .min-menu {\n    display: inline; }\n    @media screen and (min-width: 699px) {\n      .navbar .min-menu {\n        display: none; } }\n  .navbar ul {\n    width: 100%;\n    list-style-type: none;\n    overflow: hidden;\n    margin: 0;\n    padding: 0; }\n    .navbar ul li {\n      float: left; }\n      @media screen and (max-width: 700px) {\n        .navbar ul li {\n          display: none; } }\n      .navbar ul li a {\n        text-align: center;\n        display: block;\n        color: white;\n        text-decoration: none;\n        padding: 16px 25px;\n        transition: 0.3s linear; }\n        .navbar ul li a:hover {\n          transition: 0.3s linear;\n          background-color: white;\n          color: #583123;\n          cursor: pointer; }\n\n.active {\n  background-color: white;\n  color: #583123 !important; }\n\n.pad-top {\n  height: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(stockService, router) {
        this.stockService = stockService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onResetStock = function () {
        this.stockService.setCurrentStock('');
        this.router.navigate(['/create']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_stock_service__["a" /* StockService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/production/product-create/product-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <h2>Выбрать комплектующие</h2>\n  <div class=\"my-container mat-elevation-z8\">\n\n    <div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\">\n      <md-input-container floatPlaceholder=\"never\">\n        <input mdInput #filter placeholder=\"Filter\">\n      </md-input-container>\n    </div>\n    <div class=\"example-header example-selection-header\"\n      *ngIf=\"!selection.isEmpty()\">\n      {{selection.selected.length}}\n      {{selection.selected.length == 1 ? 'element' : 'elements'}}\n      selected\n    </div>\n\n    <md-table #table [dataSource]=\"dataSource\" mdSort>\n    <!-- mdSortActive=\"created\" mdSortDisableClear mdSortDirection=\"asc\"> -->\n\n    <!-- Checkbox Column -->\n    <ng-container mdColumnDef=\"select\">\n      <md-header-cell *mdHeaderCellDef>\n        <md-checkbox (change)=\"$event ? masterToggle() : null\"\n                     [checked]=\"isAllSelected()\"\n                     [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </md-checkbox>\n      </md-header-cell>\n      <md-cell *mdCellDef =\"let row\">\n        <md-checkbox (click)=\"$event.stopPropagation()\"\n                     (change)=\"$event ? selection.toggle(row.name) : null\"\n                     [checked]=\"selection.isSelected(row.name)\">\n        </md-checkbox>\n      </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"name\">\n      <md-header-cell *mdHeaderCellDef md-sort-header> Имя </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.name}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"count\">\n      <md-header-cell *mdHeaderCellDef md-sort-header [style.flex]=\"'0 0 60px'\">Кол-во. </md-header-cell>\n      <md-cell *mdCellDef=\"let row\" [style.flex]=\"'0 0 60px'\">\n        <!-- <md-form-field [style.display]=\"selection.isSelected(row.name) ? '': 'none'\"> -->\n        <md-input-container  [style.display]=\"selection.isSelected(row.name) ? '': 'none'\"\n        [style.width]=\"'60px'\">\n          <input mdInput\n          type=\"number\" min=0 max=1000 value=\"0\" name=\"count\" [(ngModel)]=\"row.count\">\n        </md-input-container>\n        <!-- </md-form-field> -->\n      </md-cell>\n    </ng-container>\n\n    <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n    <md-row *mdRowDef=\"let row; columns: displayedColumns;\"\n      >\n    </md-row>\n</md-table>\n  <div class=\"example-no-results\"\n       [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n       Нет данных по данному фильтру.\n  </div>\n\n  <md-paginator #paginator\n                [length]=\"dataSource.filteredData.length\"\n                [pageIndex]=\"0\"\n                [pageSize]=\"5\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </md-paginator>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/production/product-create/product-create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  position: relative; }\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.example-table {\n  overflow: auto;\n  min-height: 300px; }\n\n.mat-column-title {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden; }\n\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px; }\n\n.mat-column-created {\n  max-width: 124px; }\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/production/product-create/product-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/@angular/cdk/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCreateComponent; });
/* unused harmony export CatalogDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductCreateComponent = (function () {
    function ProductCreateComponent(_dataService) {
        this._dataService = _dataService;
        this.getDataFromCatalog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.displayedColumns = ['select', 'name', 'count'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* SelectionModel */](true, []);
        this.catalog = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    Object.defineProperty(ProductCreateComponent.prototype, "product", {
        set: function (isSubmit) {
            var _this = this;
            this.dataTable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                _this.catalog.value.forEach(function (data) {
                    if (_this.selection.isSelected(data.name)) {
                        observer.next({
                            _id: data._id,
                            name: data.name,
                            count: data.count
                        });
                    }
                });
                observer.complete();
            });
            this.getDataFromCatalog.emit(this.dataTable);
        },
        enumerable: true,
        configurable: true
    });
    ProductCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getCatalogs().subscribe({
            next: function (value) {
                value.map(function (obj) { return obj.count = 0; });
                _this.catalog.next(value);
            }
        });
        this.dataSource = new CatalogDataSource(this.catalog, this.sort, this.paginator);
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    ProductCreateComponent.prototype.isAllSelected = function () {
        if (!this.dataSource) {
            return false;
        }
        if (this.selection.isEmpty()) {
            return false;
        }
        if (this.filter.nativeElement.value) {
            return this.selection.selected.length == this.dataSource.renderedData.length;
        }
        else {
            return this.selection.selected.length == this.catalog.value.length;
        }
    };
    ProductCreateComponent.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.renderedData.forEach(function (data) { _this.selection.select(data.name); if (!data.count)
                data.count = 1; });
        }
        else {
            this.catalog.value.forEach(function (data) { _this.selection.select(data.name); if (!data.count)
                data.count = 1; });
        }
    };
    return ProductCreateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], ProductCreateComponent.prototype, "getDataFromCatalog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ProductCreateComponent.prototype, "product", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSort */]) === "function" && _a || Object)
], ProductCreateComponent.prototype, "sort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdPaginator */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdPaginator */]) === "function" && _b || Object)
], ProductCreateComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _c || Object)
], ProductCreateComponent.prototype, "filter", void 0);
ProductCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'product-create',
        template: __webpack_require__("../../../../../src/app/components/production/product-create/product-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/production/product-create/product-create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */]) === "function" && _d || Object])
], ProductCreateComponent);

var CatalogDataSource = (function (_super) {
    __extends(CatalogDataSource, _super);
    function CatalogDataSource(catalog, _sort, _paginator) {
        var _this = _super.call(this) || this;
        _this.catalog = catalog;
        _this._sort = _sort;
        _this._paginator = _paginator;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        _this.filteredData = [];
        _this.renderedData = [];
        _this.resultsLength = 0;
        _this.isLoadingResults = false;
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(CatalogDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    CatalogDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.catalog,
            this._sort.mdSortChange,
            this._filterChange,
            this._paginator.page,
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"], displayDataChanges).startWith(null)
            .switchMap(function () {
            _this.isLoadingResults = true;
            return _this.getSortedData();
        })
            .catch(function () {
            // Catch if the GitHub API has reached its rate limit. Return empty result.
            _this.isRateLimitReached = true;
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(null);
        })
            .map(function (result) {
            // Flip flag to show that loading has finished.
            _this.resultsLength = result.length;
            _this.isLoadingResults = false;
            return result;
        })
            .map(function (result) {
            if (!result) {
                return [];
            }
            // Filter data
            _this.filteredData = result.slice().filter(function (item) {
                var searchStr = item.name.toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
            // Sort filtered data
            // const sortedData = this.sortData(this.filteredData.slice());
            var sortedData = _this.filteredData.slice();
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
            // this.isRateLimitReached = false;
            // this.resultsLength = result.total_count;
            // return result;
            // return this.readGithubResult(result);
        });
    };
    CatalogDataSource.prototype.disconnect = function () { };
    CatalogDataSource.prototype.getSortedData = function () {
        var _this = this;
        return this.catalog.map(function (data) {
            if (!_this._sort.active || _this._sort.direction == '') {
                return data;
            }
            return data.sort(function (a, b) {
                var propertyA = '';
                var propertyB = '';
                switch (_this._sort.active) {
                    case 'name':
                        _a = [a.name, b.name], propertyA = _a[0], propertyB = _a[1];
                        break;
                    case 'measure':
                        _b = [a.measure, b.measure], propertyA = _b[0], propertyB = _b[1];
                        break;
                    case 'price':
                        _c = [a.price, b.price], propertyA = _c[0], propertyB = _c[1];
                        break;
                    case 'storePlace':
                        _d = [a.storePlace, b.storePlace], propertyA = _d[0], propertyB = _d[1];
                        break;
                }
                var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
                var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    valueA = valueA.toLowerCase();
                    valueB = valueB.toLowerCase();
                }
                return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
                var _a, _b, _c, _d;
            });
        });
    };
    return CatalogDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["b" /* DataSource */]));

var _a, _b, _c, _d;
//# sourceMappingURL=product-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/production/product-table/product-table.component.html":
/***/ (function(module, exports) {

module.exports = "<md-grid-list *ngIf=\"load\" cols=\"1\" rowHeight=\"3:2\">\n  <md-grid-tile>\n    <md-spinner></md-spinner>\n  </md-grid-tile>\n</md-grid-list>\n<ng-container *ngIf=\"!load\">\n  <h3 *ngIf=\"!products.length\">Создайте продукт используя каталог</h3>\n  <div *ngIf=\"products.length\">\n    <h3>Продукты</h3>\n    <ng-container  *ngFor=\"let product of products; let ind = index;\">\n      <md-card>\n        <md-card-header>\n          <h3>{{product.name}}</h3>\n        </md-card-header>\n        <md-card-actions>\n          <div align=\"left\" (click)=\"products[ind].show = !products[ind].show\">\n            <fa name=\"minus-square\" size=\"lg\" [hidden]=\"!products[ind].show\"></fa>\n            <fa name=\"plus-square\" size=\"lg\" [hidden]=\"products[ind].show\"></fa>\n          </div>\n        </md-card-actions>\n        <md-card-content *ngIf=\"products[ind].show\">\n          <table>\n            <tr>\n              <th>Деталь</th>\n              <th>Кол-во</th>\n            </tr>\n\n            <tr *ngFor=\"let elem of product.dataTable\">\n              <td>{{elem.name}}</td>\n              <td align=\"center\"><md-chip [style.display]=\"'block'\" color=\"primary\" selected=\"true\">{{elem.count}}</md-chip></td>\n            </tr>\n          </table>\n        </md-card-content>\n      </md-card>\n      <br>\n    </ng-container>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/components/production/product-table/product-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/production/product-table/product-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductTableComponent = (function () {
    function ProductTableComponent(_dataService) {
        this._dataService = _dataService;
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], ProductTableComponent.prototype, "onEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ProductTableComponent.prototype, "change", null);
ProductTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'product-table',
        template: __webpack_require__("../../../../../src/app/components/production/product-table/product-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/production/product-table/product-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */]) === "function" && _a || Object])
], ProductTableComponent);

var _a;
//# sourceMappingURL=product-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/production/production.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-container\">\n\n  <md-sidenav-container class=\"my-height\">\n    <md-sidenav #sidenav mode=\"side\" opened=\"true\">\n      <button *ngIf=\"sidenav.opened\" md-mini-fab class=\"my-fab\" (click)=\"sidenav.toggle()\">\n        <fa  name=\"times\"></fa>\n      </button>\n      <md-toolbar class=\"my-toolbar\">\n        <md-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 1\">\n          <span>Продукты</span>\n        </md-toolbar-row>\n\n        <md-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 2; edit = false\">\n          <span>Создать продукт</span>\n        </md-toolbar-row>\n      </md-toolbar>\n\n    </md-sidenav>\n\n    <button *ngIf=\"!sidenav.opened\" md-mini-fab class=\"my-fab bars\" (click)=\"sidenav.toggle()\">\n      <fa  name=\"bars\"></fa>\n    </button>\n\n    <div class=\"my-container\">\n      <div [style.display]=\"menuToolbarActive === 1 ? '' : 'none'\" class=\"\">\n        <product-table [change]=\"menuToolbarActive === 1\"  (onEdit)=\"catalog = $event; menuToolbarActive = 2; edit = true;\"></product-table>\n      </div>\n\n      <div [style.display]=\"menuToolbarActive === 2 ? '': 'none'\" class=\"my-card\">\n        <md-card>\n          <h1 align=center>Создать продукт</h1>\n          <form #createProduct=\"ngForm\" (ngSubmit)=\"onSubmit(createProduct)\" >\n            <md-form-field>\n              <input mdInput type=\"text\" name=\"name\" [(ngModel)]=\"product.name\" required placeholder=\"Название продукта\">\n            </md-form-field>\n            <!-- <md-card-actions> -->\n              <button  md-raised-button [disabled]=\"!createProduct.form.valid\"  type=\"submit\">\n                Cоздать продукт\n              </button>\n              <button  md-raised-button  type=\"reset\">Очистить</button>\n            <!-- </md-card-actions> -->\n          </form>\n          <product-create [product]=\"isSubmit\" (getDataFromCatalog)=\"dataTable = $event\"></product-create>\n        </md-card>\n      </div>\n    </div>\n  </md-sidenav-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/production/production.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-fab {\n  position: absolute;\n  color: white;\n  background-color: #583123;\n  left: 20px;\n  top: 20px; }\n  .my-fab.bars {\n    position: relative; }\n\n.my-toolbar {\n  padding: 0px; }\n  .my-toolbar .my-toolbar-row {\n    padding: 10px;\n    transition: 0.3s linear; }\n    .my-toolbar .my-toolbar-row:hover {\n      transition: 0.3s linear;\n      background-color: white;\n      color: #583123;\n      border: 4px #583123 solid;\n      border-left: none;\n      cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/production/production.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
                return dt_1.push(data);
            }, function () { return console.log("Error"); }, function () {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'production',
        template: __webpack_require__("../../../../../src/app/components/production/production.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/production/production.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */]) === "function" && _a || Object])
], ProductionComponent);

var _a;
//# sourceMappingURL=production.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-expense/stock-expense.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Расход</h2>\n"

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-expense/stock-expense.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-expense/stock-expense.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockExpenseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StockExpenseComponent = (function () {
    function StockExpenseComponent() {
    }
    StockExpenseComponent.prototype.ngOnInit = function () {
    };
    return StockExpenseComponent;
}());
StockExpenseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'stock-expense',
        template: __webpack_require__("../../../../../src/app/components/stock/stock-expense/stock-expense.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/stock/stock-expense/stock-expense.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], StockExpenseComponent);

//# sourceMappingURL=stock-expense.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-income/stock-income.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <h2 align=center>Приход деталей</h2>\n  <md-grid-list cols=\"2\">\n    <!-- Form -->\n    <md-grid-tile>\n      <form #incomeGoods=\"ngForm\" (ngSubmit)=\"onSubmit(incomeGoods)\" >\n        <span>Время прихода {{currentDate | date}}</span>\n        <md-card-actions>\n          <button  md-raised-button [disabled]=\"!incomeGoods.form.valid\"  type=\"submit\">\n            Добавить в склад\n          </button>\n          <button  md-raised-button  type=\"reset\">Очистить</button>\n        </md-card-actions>\n      </form>\n    </md-grid-tile>\n    <!-- Catalog -->\n    <md-grid-tile>\n      <div class=\"\">\n        <h4>Выбрать деталь из каталога или добавить новый</h4>\n        <div class=\"my-container mat-elevation-z8\">\n\n          <div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\">\n            <md-input-container floatPlaceholder=\"never\">\n              <input mdInput #filter placeholder=\"Filter\">\n            </md-input-container>\n          </div>\n          <div class=\"example-header example-selection-header\"\n            *ngIf=\"!selection.isEmpty()\">\n            {{selection.selected.length}}\n            {{selection.selected.length == 1 ? 'element' : 'elements'}}\n            selected\n          </div>\n\n          <md-table #table [dataSource]=\"dataSource\" mdSort>\n\n          <!-- Checkbox Column -->\n          <ng-container mdColumnDef=\"select\">\n            <md-header-cell *mdHeaderCellDef  [style.flex]=\"'0 0 30px'\">\n              <md-checkbox (change)=\"$event ? masterToggle() : null\"\n                           [checked]=\"isAllSelected()\"\n                           [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n              </md-checkbox>\n            </md-header-cell>\n            <md-cell *mdCellDef =\"let row\"  [style.flex]=\"'0 0 30px'\">\n              <md-checkbox (click)=\"$event.stopPropagation()\"\n                           (change)=\"$event ? changeSelected(row) : null\"\n                           [checked]=\"selection.isSelected(row.name)\">\n              </md-checkbox>\n            </md-cell>\n          </ng-container>\n\n          <ng-container mdColumnDef=\"name\">\n            <md-header-cell *mdHeaderCellDef md-sort-header> Имя </md-header-cell>\n            <md-cell *mdCellDef=\"let row\"> {{row.name}} </md-cell>\n          </ng-container>\n\n          <ng-container mdColumnDef=\"count\">\n            <md-header-cell *mdHeaderCellDef md-sort-header [style.flex]=\"'0 0 60px'\">Кол-во. </md-header-cell>\n            <md-cell *mdCellDef=\"let row\" [style.flex]=\"'0 0 60px'\">\n              <!-- <md-form-field [style.display]=\"selection.isSelected(row.name) ? '': 'none'\"> -->\n              <md-input-container  [style.display]=\"selection.isSelected(row.name) ? '': 'none'\"\n              [style.width]=\"'60px'\">\n                <input mdInput\n                type=\"number\" min=0 max=1000 value=\"0\" name=\"count\" [(ngModel)]=\"row.count\">\n              </md-input-container>\n              <!-- </md-form-field> -->\n            </md-cell>\n          </ng-container>\n\n          <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n          <md-row *mdRowDef=\"let row; columns: displayedColumns;\"\n            >\n          </md-row>\n      </md-table>\n        <div class=\"example-no-results\"\n             [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n             Нет данных по данному фильтру.\n        </div>\n\n        <md-paginator #paginator\n                      [length]=\"dataSource.filteredData.length\"\n                      [pageIndex]=\"0\"\n                      [pageSize]=\"10\"\n                      [pageSizeOptions]=\"[5, 10, 25, 100]\">\n        </md-paginator>\n\n      </div>\n\n      </div>\n\n    </md-grid-tile>\n  </md-grid-list>\n\n  <!-- <product-create [product]=\"isSubmit\" (getDataFromCatalog)=\"dataTable = $event\"></product-create>  -->\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-income/stock-income.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  position: relative; }\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.example-table {\n  overflow: auto;\n  min-height: 300px; }\n\n.mat-column-title {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden; }\n\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px; }\n\n.mat-column-created {\n  max-width: 124px; }\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-income/stock-income.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/@angular/cdk/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockIncomeComponent; });
/* unused harmony export CatalogDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StockIncomeComponent = (function () {
    function StockIncomeComponent(_dataService) {
        this._dataService = _dataService;
        this.currentDate = new Date;
        this.getDataFromCatalog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.displayedColumns = ['select', 'name', 'count'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* SelectionModel */](true, []);
        this.catalog = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        // dataTable: Observable<GoodElement[]>;
        this.isSubmit = false;
        this.product = {};
    }
    Object.defineProperty(StockIncomeComponent.prototype, "good", {
        set: function (isSubmit) {
            var _this = this;
            this.dataTable = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
                _this.catalog.value.forEach(function (data) {
                    if (_this.selection.isSelected(data.name)) {
                        observer.next({
                            _id: data._id,
                            name: data.name,
                            count: data.count
                        });
                    }
                });
                observer.complete();
            });
            this.getDataFromCatalog.emit(this.dataTable);
        },
        enumerable: true,
        configurable: true
    });
    StockIncomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.currentDate);
        this._dataService.getCatalogs().subscribe({
            next: function (value) {
                value.map(function (obj) { return obj.count = 0; });
                _this.catalog.next(value);
            }
        });
        this.dataSource = new CatalogDataSource(this.catalog, this.sort, this.paginator);
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    StockIncomeComponent.prototype.onSubmit = function (data) {
        var _this = this;
        console.log(data);
        console.log(data.form.valid);
        if (data.form.valid) {
            var dt_1 = [];
            this.dataTable.subscribe(function (data) {
                return dt_1.push(data);
            }, function () { return console.log("Error"); }, function () {
                _this.product.dataTable = dt_1;
                console.log(_this.product);
                _this._dataService.createProduct(_this.product, function (err) {
                    if (err)
                        console.log('Not create new product!!!');
                    else {
                        console.log('Create new product SUCCESS!!!');
                        data.form.reset();
                    }
                });
            });
            this.isSubmit = true;
        }
    };
    StockIncomeComponent.prototype.changeSelected = function (row) {
        this.selection.toggle(row.name);
        if (this.selection.isSelected(row.name))
            row.count = 1;
        else
            row.count = 0;
    };
    StockIncomeComponent.prototype.isAllSelected = function () {
        if (!this.dataSource) {
            return false;
        }
        if (this.selection.isEmpty()) {
            return false;
        }
        if (this.filter.nativeElement.value) {
            return this.selection.selected.length == this.dataSource.renderedData.length;
        }
        else {
            return this.selection.selected.length == this.catalog.value.length;
        }
    };
    StockIncomeComponent.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.renderedData.forEach(function (data) { _this.selection.select(data.name); if (!data.count)
                data.count = 1; });
        }
        else {
            this.catalog.value.forEach(function (data) { _this.selection.select(data.name); if (!data.count)
                data.count = 1; });
        }
    };
    return StockIncomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], StockIncomeComponent.prototype, "getDataFromCatalog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], StockIncomeComponent.prototype, "good", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSort */]) === "function" && _a || Object)
], StockIncomeComponent.prototype, "sort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdPaginator */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdPaginator */]) === "function" && _b || Object)
], StockIncomeComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _c || Object)
], StockIncomeComponent.prototype, "filter", void 0);
StockIncomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'stock-income',
        template: __webpack_require__("../../../../../src/app/components/stock/stock-income/stock-income.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/stock/stock-income/stock-income.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */]) === "function" && _d || Object])
], StockIncomeComponent);

var CatalogDataSource = (function (_super) {
    __extends(CatalogDataSource, _super);
    function CatalogDataSource(catalog, _sort, _paginator) {
        var _this = _super.call(this) || this;
        _this.catalog = catalog;
        _this._sort = _sort;
        _this._paginator = _paginator;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        _this.filteredData = [];
        _this.renderedData = [];
        _this.resultsLength = 0;
        _this.isLoadingResults = false;
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(CatalogDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    CatalogDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.catalog,
            this._sort.mdSortChange,
            this._filterChange,
            this._paginator.page,
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"], displayDataChanges).startWith(null)
            .switchMap(function () {
            _this.isLoadingResults = true;
            return _this.getSortedData();
        })
            .catch(function () {
            // Catch if the GitHub API has reached its rate limit. Return empty result.
            _this.isRateLimitReached = true;
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(null);
        })
            .map(function (result) {
            // Flip flag to show that loading has finished.
            _this.resultsLength = result.length;
            _this.isLoadingResults = false;
            return result;
        })
            .map(function (result) {
            if (!result) {
                return [];
            }
            // Filter data
            _this.filteredData = result.slice().filter(function (item) {
                var searchStr = item.name.toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
            // Sort filtered data
            // const sortedData = this.sortData(this.filteredData.slice());
            var sortedData = _this.filteredData.slice();
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
            // this.isRateLimitReached = false;
            // this.resultsLength = result.total_count;
            // return result;
            // return this.readGithubResult(result);
        });
    };
    CatalogDataSource.prototype.disconnect = function () { };
    CatalogDataSource.prototype.getSortedData = function () {
        var _this = this;
        return this.catalog.map(function (data) {
            if (!_this._sort.active || _this._sort.direction == '') {
                return data;
            }
            return data.sort(function (a, b) {
                var propertyA = '';
                var propertyB = '';
                switch (_this._sort.active) {
                    case 'name':
                        _a = [a.name, b.name], propertyA = _a[0], propertyB = _a[1];
                        break;
                    case 'measure':
                        _b = [a.measure, b.measure], propertyA = _b[0], propertyB = _b[1];
                        break;
                    case 'price':
                        _c = [a.price, b.price], propertyA = _c[0], propertyB = _c[1];
                        break;
                    case 'storePlace':
                        _d = [a.storePlace, b.storePlace], propertyA = _d[0], propertyB = _d[1];
                        break;
                }
                var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
                var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    valueA = valueA.toLowerCase();
                    valueB = valueB.toLowerCase();
                }
                return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
                var _a, _b, _c, _d;
            });
        });
    };
    return CatalogDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["b" /* DataSource */]));

var _a, _b, _c, _d;
//# sourceMappingURL=stock-income.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-table/stock-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <h1>Склад {{_dataService.getCurrentStock()}}</h1>\n  <div class=\"my-container mat-elevation-z8\">\n\n    <div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\">\n      <md-input-container floatPlaceholder=\"never\">\n        <input mdInput #filter placeholder=\"Filter users\">\n      </md-input-container>\n    </div>\n\n    <md-table #table [dataSource]=\"dataSource\" mdSort>\n\n    <!-- Checkbox Column -->\n    <ng-container mdColumnDef=\"select\">\n      <md-header-cell *mdHeaderCellDef>\n        <md-checkbox (change)=\"$event ? masterToggle() : null\"\n                     [checked]=\"isAllSelected()\"\n                     [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </md-checkbox>\n      </md-header-cell>\n      <md-cell *mdCellDef=\"let row\">\n        <md-checkbox (click)=\"$event.stopPropagation()\"\n                     (change)=\"$event ? selection.toggle(row.name) : null\"\n                     [checked]=\"selection.isSelected(row.name)\">\n        </md-checkbox>\n      </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"name\">\n      <md-header-cell *mdHeaderCellDef md-sort-header> Имя </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.name}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"measure\">\n      <md-header-cell *mdHeaderCellDef md-sort-header> Ед.Изм. </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.measure}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"price\">\n      <md-header-cell *mdHeaderCellDef md-sort-header> Цена </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.price}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"storePlace\">\n      <md-header-cell *mdHeaderCellDef md-sort-header> Место Хр. </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.storePlace}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"date\">\n      <md-header-cell *mdHeaderCellDef md-sort-header> Дата пр. </md-header-cell>\n      <md-cell *mdCellDef=\"let row\"> {{row.date}} </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"delete\">\n      <md-header-cell *mdHeaderCellDef></md-header-cell>\n      <md-cell *mdCellDef=\"let row\" align=\"center\">\n        <button md-icon-button\n         (click)=\"delete(row.name)\">\n          <fa style=\"color:red\" name=\"trash-o\"></fa>\n        </button>\n      </md-cell>\n    </ng-container>\n\n    <ng-container mdColumnDef=\"edit\">\n      <md-header-cell *mdHeaderCellDef></md-header-cell>\n      <md-cell *mdCellDef=\"let row\"\n        (click)=\"edit(row)\">\n        <button md-icon-button>\n          <fa style=\"color:green\" name=\"pencil\"></fa>\n        </button>\n      </md-cell>\n    </ng-container>\n\n    <md-header-row *mdHeaderRowDef=\"displayedColumns\"></md-header-row>\n    <md-row *mdRowDef=\"let row; columns: displayedColumns;\"\n      [class.example-selected-row]=\"selection.isSelected(row.name)\"\n      (click)=\"selection.toggle(row.name)\">\n    </md-row>\n</md-table>\n  <div class=\"example-no-results\"\n       [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n       Нет данных по данному фильтру.\n  </div>\n\n  <md-paginator #paginator\n                [length]=\"dataSource.filteredData.length\"\n                [pageIndex]=\"0\"\n                [pageSize]=\"5\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </md-paginator>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-table/stock-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  position: relative; }\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.example-table {\n  overflow: auto;\n  min-height: 300px; }\n\n.mat-column-title {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden; }\n\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px; }\n\n.mat-column-created {\n  max-width: 124px; }\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-table/stock-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("../../../cdk/@angular/cdk/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockTableComponent; });
/* unused harmony export CatalogDataSource */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var StockTableComponent = (function () {
    function StockTableComponent(_dataService) {
        this._dataService = _dataService;
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* EventEmitter */]();
        this.displayedColumns = ['name', 'measure', 'price', 'storePlace', 'date'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* SelectionModel */](true, []);
        this.catalog = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    StockTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getStockGoods().subscribe({
            next: function (value) { _this.catalog.next(value); }
        });
        this.dataSource = new CatalogDataSource(this.catalog, this.sort, this.paginator);
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    StockTableComponent.prototype.delete = function (name) {
        var _this = this;
        console.log('delete - ', name);
        this._dataService.deleteCatalog(name, function (err) {
            if (err)
                console.log('Не удалось удалить каталог: ', name);
            else {
                _this._dataService.getCatalogs().subscribe({
                    next: function (value) { return _this.catalog.next(value); }
                });
                // this.success = true;
                console.log('Каталог ' + name + ' успешно удален.');
            }
        });
    };
    StockTableComponent.prototype.edit = function (catalog) {
        console.log('edit - ', catalog);
        var copy = Object.assign({}, catalog);
        this.onEdit.emit(copy);
    };
    StockTableComponent.prototype.isAllSelected = function () {
        if (!this.dataSource) {
            return false;
        }
        if (this.selection.isEmpty()) {
            return false;
        }
        if (this.filter.nativeElement.value) {
            return this.selection.selected.length == this.dataSource.renderedData.length;
        }
        else {
            return this.selection.selected.length == this.catalog.value.length;
        }
    };
    StockTableComponent.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.renderedData.forEach(function (data) { return _this.selection.select(data.name); });
        }
        else {
            this.catalog.value.forEach(function (data) { return _this.selection.select(data.name); });
        }
    };
    return StockTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* Output */])(),
    __metadata("design:type", Object)
], StockTableComponent.prototype, "onEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdSort */]) === "function" && _a || Object)
], StockTableComponent.prototype, "sort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdPaginator */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdPaginator */]) === "function" && _b || Object)
], StockTableComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* ElementRef */]) === "function" && _c || Object)
], StockTableComponent.prototype, "filter", void 0);
StockTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* Component */])({
        selector: 'stock-table',
        template: __webpack_require__("../../../../../src/app/components/stock/stock-table/stock-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/stock/stock-table/stock-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_stock_service__["a" /* StockService */]) === "function" && _d || Object])
], StockTableComponent);

var CatalogDataSource = (function (_super) {
    __extends(CatalogDataSource, _super);
    // catalog: Observable<CatalogData[]>;
    function CatalogDataSource(
        // private _dataService: StockService,
        catalog, _sort, _paginator) {
        var _this = _super.call(this) || this;
        _this.catalog = catalog;
        _this._sort = _sort;
        _this._paginator = _paginator;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        _this.filteredData = [];
        _this.renderedData = [];
        _this.resultsLength = 0;
        _this.isLoadingResults = false;
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(CatalogDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    CatalogDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.catalog,
            this._sort.mdSortChange,
            this._filterChange,
            this._paginator.page,
        ];
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"], displayDataChanges).startWith(null)
            .switchMap(function () {
            _this.isLoadingResults = true;
            return _this.getSortedData();
        })
            .catch(function () {
            // Catch if the GitHub API has reached its rate limit. Return empty result.
            _this.isRateLimitReached = true;
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(null);
        })
            .map(function (result) {
            // Flip flag to show that loading has finished.
            _this.resultsLength = result.length;
            _this.isLoadingResults = false;
            return result;
        })
            .map(function (result) {
            if (!result) {
                return [];
            }
            // Filter data
            _this.filteredData = result.slice().filter(function (item) {
                var searchStr = item.name.toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
            // Sort filtered data
            // const sortedData = this.sortData(this.filteredData.slice());
            var sortedData = _this.filteredData.slice();
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
            // this.isRateLimitReached = false;
            // this.resultsLength = result.total_count;
            // return result;
            // return this.readGithubResult(result);
        });
    };
    CatalogDataSource.prototype.disconnect = function () { };
    CatalogDataSource.prototype.getSortedData = function () {
        var _this = this;
        return this.catalog.map(function (data) {
            if (!_this._sort.active || _this._sort.direction == '') {
                return data;
            }
            return data.sort(function (a, b) {
                var propertyA = '';
                var propertyB = '';
                switch (_this._sort.active) {
                    case 'name':
                        _a = [a.name, b.name], propertyA = _a[0], propertyB = _a[1];
                        break;
                    case 'measure':
                        _b = [a.measure, b.measure], propertyA = _b[0], propertyB = _b[1];
                        break;
                    case 'price':
                        _c = [a.price, b.price], propertyA = _c[0], propertyB = _c[1];
                        break;
                    case 'storePlace':
                        _d = [a.storePlace, b.storePlace], propertyA = _d[0], propertyB = _d[1];
                        break;
                }
                var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
                var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    valueA = valueA.toLowerCase();
                    valueB = valueB.toLowerCase();
                }
                return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
                var _a, _b, _c, _d;
            });
        });
    };
    return CatalogDataSource;
}(__WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["b" /* DataSource */]));

var _a, _b, _c, _d;
//# sourceMappingURL=stock-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/stock/stock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-container\">\n\n  <md-sidenav-container class=\"my-height\">\n    <md-sidenav #sidenav mode=\"side\" opened=\"true\">\n      <button *ngIf=\"sidenav.opened\" md-mini-fab class=\"my-fab\" (click)=\"sidenav.toggle()\">\n        <fa  name=\"times\"></fa>\n      </button>\n      <md-toolbar class=\"my-toolbar\">\n        <md-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 1\">\n          <span>Склад</span>\n        </md-toolbar-row>\n\n        <md-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 2;\">\n          <span>Приход</span>\n        </md-toolbar-row>\n\n        <md-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 3;\">\n          <span>Выписка</span>\n        </md-toolbar-row>\n      </md-toolbar>\n\n    </md-sidenav>\n\n    <button *ngIf=\"!sidenav.opened\" md-mini-fab class=\"my-fab bars\" (click)=\"sidenav.toggle()\">\n      <fa  name=\"bars\"></fa>\n    </button>\n\n    <div class=\"my-container\">\n      <div [style.display]=\"menuToolbarActive === 1 ? '' : 'none'\" class=\"\">\n        <!-- <product-table [change]=\"menuToolbarActive === 1\"  (onEdit)=\"catalog = $event; menuToolbarActive = 2; edit = true;\"></product-table> -->\n        <stock-table></stock-table>\n      </div>\n\n      <div [style.display]=\"menuToolbarActive === 2 ? '': 'none'\" class=\"my-card\">\n        <stock-income [good]=\"isSubmit\" (getDataFromCatalog)=\"incomeGoods = $event\"></stock-income>\n      </div>\n\n      <div [style.display]=\"menuToolbarActive === 3 ? '': 'none'\" class=\"my-card\">\n        <stock-expense></stock-expense>\n      </div>\n    </div>\n  </md-sidenav-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/stock/stock.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-fab {\n  position: absolute;\n  color: white;\n  background-color: #583123;\n  left: 20px;\n  top: 20px; }\n  .my-fab.bars {\n    position: relative; }\n\n.my-toolbar {\n  padding: 0px; }\n  .my-toolbar .my-toolbar-row {\n    padding: 10px;\n    transition: 0.3s linear; }\n    .my-toolbar .my-toolbar-row:hover {\n      transition: 0.3s linear;\n      background-color: white;\n      color: #583123;\n      border: 4px #583123 solid;\n      border-left: none;\n      cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stock/stock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { GoodElement } from './stock-income/stock-income.component';
// import {Observable} from 'rxjs';
var StockComponent = (function () {
    function StockComponent(_dataService) {
        this._dataService = _dataService;
        this.menuToolbarActive = 1;
    }
    StockComponent.prototype.ngOnInit = function () {
    };
    return StockComponent;
}());
StockComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-stock',
        template: __webpack_require__("../../../../../src/app/components/stock/stock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/stock/stock.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */]) === "function" && _a || Object])
], StockComponent);

var _a;
//# sourceMappingURL=stock.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/stock.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockGuard = (function () {
    function StockGuard(stockService, router) {
        this.stockService = stockService;
        this.router = router;
    }
    StockGuard.prototype.canActivate = function () {
        if (this.stockService.IsExistStock()) {
            return true;
        }
        else {
            this.router.navigate(['/create']);
            return false;
        }
    };
    return StockGuard;
}());
StockGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_stock_service__["a" /* StockService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], StockGuard);

var _a, _b;
//# sourceMappingURL=stock.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/stock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StockService = (function () {
    function StockService(_http) {
        this._http = _http;
        this.stockName = '';
    }
    StockService.prototype.IsExistStock = function () {
        return this.stockName.length !== 0;
    };
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
    StockService.prototype.getStockGoods = function () {
        var _this = this;
        return this._http.get("/api/stock-goods")
            .map(function (result) { return _this.result = result.json().data; });
    };
    StockService.prototype.incomeGoods = function (goods, callback) {
        this._http.post("/api/income-goods", goods)
            .subscribe(function (result) { return callback(!result.ok); });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], StockService);

var _a;
//# sourceMappingURL=stock.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map