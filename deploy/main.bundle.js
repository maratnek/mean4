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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_stock_stock_component__ = __webpack_require__("../../../../../src/app/components/stock/stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_catalog_catalog_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_production_production_component__ = __webpack_require__("../../../../../src/app/components/production/production.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_config_config_component__ = __webpack_require__("../../../../../src/app/components/config/config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_stock_guard__ = __webpack_require__("../../../../../src/app/guards/stock.guard.ts");
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
    // {path: 'main', component: MainStockComponent},
    { path: 'catalog', component: __WEBPACK_IMPORTED_MODULE_4__components_catalog_catalog_component__["a" /* CatalogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_stock_guard__["a" /* StockGuard */]] },
    { path: 'production', component: __WEBPACK_IMPORTED_MODULE_5__components_production_production_component__["a" /* ProductionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_stock_guard__["a" /* StockGuard */]] },
    { path: 'stock', component: __WEBPACK_IMPORTED_MODULE_3__components_stock_stock_component__["a" /* StockComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_stock_guard__["a" /* StockGuard */]] },
    { path: 'config', component: __WEBPACK_IMPORTED_MODULE_6__components_config_config_component__["a" /* ConfigComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_7__guards_stock_guard__["a" /* StockGuard */]] },
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_create_stock_create_stock_component__ = __webpack_require__("../../../../../src/app/components/create-stock/create-stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_main_stock_main_stock_component__ = __webpack_require__("../../../../../src/app/components/main-stock/main-stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_stock_stock_component__ = __webpack_require__("../../../../../src/app/components/stock/stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_catalog_catalog_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_production_production_component__ = __webpack_require__("../../../../../src/app/components/production/production.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_catalog_catalog_form_catalog_form_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-form/catalog-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_catalog_catalog_table_catalog_table_component__ = __webpack_require__("../../../../../src/app/components/catalog/catalog-table/catalog-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_production_product_create_product_create_component__ = __webpack_require__("../../../../../src/app/components/production/product-create/product-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_production_product_table_product_table_component__ = __webpack_require__("../../../../../src/app/components/production/product-table/product-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_stock_stock_table_stock_table_component__ = __webpack_require__("../../../../../src/app/components/stock/stock-table/stock-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_stock_stock_income_stock_income_component__ = __webpack_require__("../../../../../src/app/components/stock/stock-income/stock-income.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_config_config_component__ = __webpack_require__("../../../../../src/app/components/config/config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_stock_guard__ = __webpack_require__("../../../../../src/app/guards/stock.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_stock_stock_expense_stock_expense_component__ = __webpack_require__("../../../../../src/app/components/stock/stock-expense/stock-expense.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// Angular material
// import {MaterialModule} from '@angular/material';
// import {CdkTableModule} from '@angular/cdk';


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_create_stock_create_stock_component__["a" /* CreateStockComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_main_stock_main_stock_component__["a" /* MainStockComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_stock_stock_component__["a" /* StockComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_catalog_catalog_component__["a" /* CatalogComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_production_production_component__["a" /* ProductionComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_catalog_catalog_form_catalog_form_component__["a" /* CatalogFormComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_catalog_catalog_table_catalog_table_component__["a" /* CatalogTableComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_production_product_create_product_create_component__["a" /* ProductCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_production_product_table_product_table_component__["a" /* ProductTableComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_stock_stock_table_stock_table_component__["a" /* StockTableComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_stock_stock_income_stock_income_component__["a" /* StockIncomeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_config_config_component__["a" /* ConfigComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_stock_stock_expense_stock_expense_component__["a" /* StockExpenseComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_9_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["a" /* MatSortModule */],
            // CdkTableModule,
            __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* ReactiveFormsModule */],
            //Material
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["b" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["c" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["d" /* MatButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["e" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["f" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["g" /* MatChipsModule */],
            // MatCoreModule,
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["h" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["i" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["j" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["k" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["l" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["m" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["n" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["o" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["p" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["q" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["r" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["s" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["t" /* MatRadioModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["u" /* MatRippleModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["v" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["w" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["x" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["y" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["z" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["a" /* MatSortModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["A" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["B" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["C" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["D" /* MatTooltipModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_stock_service__["a" /* StockService */], __WEBPACK_IMPORTED_MODULE_25__guards_stock_guard__["a" /* StockGuard */], __WEBPACK_IMPORTED_MODULE_5__services_stock_service__["a" /* StockService */],
            { provide: __WEBPACK_IMPORTED_MODULE_17__angular_material__["E" /* MATERIAL_COMPATIBILITY_MODE */], useValue: true },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/classes/generic-data-sourse.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericDataSource; });
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




var GenericDataSource = (function (_super) {
    __extends(GenericDataSource, _super);
    function GenericDataSource(catalog, _sort, _paginator, _key) {
        var _this = _super.call(this) || this;
        _this.catalog = catalog;
        _this._sort = _sort;
        _this._paginator = _paginator;
        _this._key = _key;
        _this._filterChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        _this.filteredData = [];
        _this.renderedData = [];
        _this.resultsLength = 0;
        _this.isLoadingResults = false;
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(GenericDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    GenericDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this.catalog,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page,
        ];
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].merge.apply(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"], displayDataChanges).startWith(null)
            .switchMap(function () {
            _this.isLoadingResults = true;
            return _this.getSortedData();
        })
            .catch(function () {
            // Catch if the GitHub API has reached its rate limit. Return empty result.
            _this.isRateLimitReached = true;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(null);
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
                var getStr = function (str) { return str; };
                var searchStr = getStr(item[_this._key]);
                searchStr = searchStr.toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
            // Sort filtered data
            var sortedData = _this.filteredData.slice();
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        });
    };
    GenericDataSource.prototype.disconnect = function () { };
    GenericDataSource.prototype.getSortedData = function () {
        var _this = this;
        return this.catalog.map(function (data) {
            if (!_this._sort.active || _this._sort.direction == '') {
                return data;
            }
            return data.sort(function (a, b) {
                var propertyA = '';
                var propertyB = '';
                _a = [a[_this._sort.active], b[_this._sort.active]], propertyA = _a[0], propertyB = _a[1];
                var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
                var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
                if (typeof valueA === 'string' && typeof valueB === 'string') {
                    valueA = valueA.toLowerCase();
                    valueB = valueB.toLowerCase();
                }
                return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
                var _a;
            });
        });
    };
    return GenericDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__angular_cdk_collections__["d" /* DataSource */]));

//# sourceMappingURL=generic-data-sourse.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-form/catalog-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{edit? 'Редактировать':'Добавить'}} элемент {{catalog.name}}</h1>\n<mat-card>\n  <form #addNewCatalog=\"ngForm\" (ngSubmit)=\"onSubmit(addNewCatalog)\" align=\"\">\n    <mat-form-field >\n      <input matInput type=\"text\" name=\"name\" [(ngModel)]=\"catalog.name\" required placeholder=\"Наименование товара\">\n    </mat-form-field>\n    <br>\n\n    <mat-select name=\"measure\" [(ngModel)]=\"catalog.measure\" required placeholder=\"Единица измерения\">\n      <mat-option *ngFor=\"let measure of measures\" [value]=\"measure.ms\">\n        {{measure.ms}}\n      </mat-option>\n    </mat-select>\n    <br>\n\n    <mat-form-field align=\"center\">\n      <span matPrefix style=\"padding-right: 20px\"><fa name='rub'></fa></span>\n      <input matInput type=\"number\" name=\"price\" [(ngModel)]=\"catalog.price\" required placeholder=\"Цена\" align=\"\">\n      <span matSuffix>за {{catalog.measure}}</span>\n    </mat-form-field>\n    <br>\n\n    <mat-form-field>\n      <input matInput type=\"text\" [matAutocomplete]=auto\n      [(ngModel)]=\"catalog.storePlace\" [formControl]=\"stateControl\" pattern=\"[A-Z]\"\n      placeholder=\"Сектор хранения\">\n    </mat-form-field>\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of states\" [value]=\"state\">\n        {{ state }}\n      </mat-option>\n    </mat-autocomplete>\n    <br>\n\n    <label for=\"suppliers\">Добавить поставщика  </label>\n    <button type=\"button\" mat-raised-button name=\"suppliers\" (click)=\"isSuppliersCheck=!isSuppliersCheck\">\n      <fa name=\"truck\"></fa>\n      <fa *ngIf=\"!isSuppliersCheck\" name=\"plus\"></fa>\n      <fa *ngIf=\"isSuppliersCheck\" name=\"minus\"></fa>\n    </button>\n    <br>\n    <ng-container *ngIf=\"isSuppliersCheck\">\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"suppliersName\" [(ngModel)]=\"catalog.suppliersName\" placeholder=\"Имя поставщика\">\n      </mat-form-field>\n      <mat-form-field>\n        <input matInput type=\"tel\" name=\"suppliersTel\" [(ngModel)]=\"catalog.suppliersTel\" placeholder=\"Телефон\">\n      </mat-form-field>\n    </ng-container>\n    <br>\n\n    <mat-form-field>\n      <input matInput #postalCode maxlength=\"10\" type=\"number\" disabled placeholder=\"Штрих код\" value=\"0000000000\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 10</mat-hint>\n    </mat-form-field>\n\n    <mat-card-actions>\n      <button  mat-raised-button [disabled]=\"!addNewCatalog.form.valid\"  type=\"submit\"  name=\"button\">\n        {{edit? 'Редактировать':'Добавить'}}\n      </button>\n      <button  mat-raised-button  type=\"reset\"  name=\"button\">Очистить</button>\n    </mat-card-actions>\n  </form>\n</mat-card>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
    function CatalogFormComponent(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
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
        this.stateControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormControl */]();
        for (var i = 65; i < 26 + 65; i++)
            this.states.push(String.fromCharCode(i));
        this.filteredStates = this.stateControl.valueChanges
            .startWith(null)
            .map(function (name) { return _this.filterStates(name); });
        this.filteredStates.map(function (name) { return console.log(name); });
    };
    CatalogFormComponent.prototype.onSubmit = function (addNewCatalog) {
        var _this = this;
        console.log(addNewCatalog.form.valid);
        if (addNewCatalog.form.valid) {
            this.catalog.edit = this.edit;
            this._dataService.addCatalog(this.catalog, function (err) {
                if (err)
                    console.log('Not add new catalog!!!');
                else {
                    addNewCatalog.form.reset();
                    _this._router.navigate(['/catalog']);
                }
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Object)
], CatalogFormComponent.prototype, "catalog", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Boolean)
], CatalogFormComponent.prototype, "edit", void 0);
CatalogFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'catalog-form',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog-form/catalog-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog-form/catalog-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_stock_service__["a" /* StockService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], CatalogFormComponent);

var _a, _b;
//# sourceMappingURL=catalog-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog-table/catalog-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <h1>Каталог товаров</h1>\n  <div class=\"my-container mat-elevation-z8\">\n    <div class=\"example-loading-shade\" *ngIf=\"dataSource.isLoadingResults || dataSource.isRateLimitReached\">\n      <mat-spinner *ngIf=\"dataSource.isLoadingResults\"></mat-spinner>\n      <div class=\"example-rate-limit-reached\" *ngIf=\"dataSource.isRateLimitReached\">\n        <mat-grid-list *ngIf=\"true\" cols=\"1\" rowHeight=\"3:2\">\n          <mat-grid-tile>\n            <mat-spinner></mat-spinner>\n          </mat-grid-tile>\n        </mat-grid-list>\n        GitHub's API rate limit has been reached. It will be reset in one minute.\n      </div>\n    </div>\n\n    <div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\">\n      <mat-form-field floatPlaceholder=\"never\">\n        <input matInput #filter placeholder=\"Filter users\">\n      </mat-form-field>\n    </div>\n    <!-- <div class=\"example-header example-selection-header\"\n      *ngIf=\"!selection.isEmpty()\">\n      {{selection.selected.length}}\n      {{selection.selected.length == 1 ? 'user' : 'users'}}\n      selected\n    </div> -->\n\n    <mat-table #table [dataSource]=\"dataSource\" matSort>\n    <!-- matSortActive=\"created\" matSortDisableClear matSortDirection=\"asc\"> -->\n\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                     [checked]=\"isAllSelected()\"\n                     [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                     (change)=\"$event ? selection.toggle(row.name) : null\"\n                     [checked]=\"selection.isSelected(row.name)\">\n        </mat-checkbox>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Имя </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"measure\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Ед.Изм. </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.measure}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Цена </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.price}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"storePlace\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Место Хр. </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.storePlace}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"delete\">\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" align=\"center\">\n        <button mat-icon-button\n         (click)=\"delete(row.name)\">\n          <fa style=\"color:red\" name=\"trash-o\"></fa>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"edit\">\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"\n        (click)=\"edit(row)\">\n        <button mat-icon-button>\n          <fa style=\"color:green\" name=\"pencil\"></fa>\n        </button>\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n      [class.example-selected-row]=\"selection.isSelected(row.name)\"\n      (click)=\"selection.toggle(row.name)\">\n    </mat-row>\n</mat-table>\n  <div class=\"example-no-results\"\n       [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n       Нет данных по данному фильтру.\n  </div>\n\n  <mat-paginator #paginator\n                [length]=\"dataSource.filteredData.length\"\n                [pageIndex]=\"0\"\n                [pageSize]=\"5\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n\n</div>\n\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_generic_data_sourse__ = __webpack_require__("../../../../../src/app/classes/generic-data-sourse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogTableComponent; });
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
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* EventEmitter */]();
        this.displayedColumns = ['name', 'measure', 'price', 'storePlace', 'delete', 'edit'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        this.catalog = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    CatalogTableComponent.prototype.ngOnChanges = function () {
        var _this = this;
        console.log('Change my table');
        if (this.change)
            this._dataService.getCatalogs().subscribe({ next: function (value) { return _this.catalog.next(value); } });
    };
    CatalogTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getCatalogs().subscribe({ next: function (value) { return _this.catalog.next(value); } });
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__classes_generic_data_sourse__["a" /* GenericDataSource */](this.catalog, this.sort, this.paginator, "name");
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], CatalogTableComponent.prototype, "onEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["l" /* Input */])(),
    __metadata("design:type", Boolean)
], CatalogTableComponent.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */]) === "function" && _a || Object)
], CatalogTableComponent.prototype, "sort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */]) === "function" && _b || Object)
], CatalogTableComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["g" /* ElementRef */]) === "function" && _c || Object)
], CatalogTableComponent.prototype, "filter", void 0);
CatalogTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
        selector: 'catalog-table',
        template: __webpack_require__("../../../../../src/app/components/catalog/catalog-table/catalog-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/catalog/catalog-table/catalog-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_stock_service__["a" /* StockService */]) === "function" && _d || Object])
], CatalogTableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=catalog-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/catalog/catalog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-container\">\n  <mat-sidenav-container class=\"my-height\">\n    <mat-sidenav #sidenav mode=\"side\" opened=\"true\">\n      <button *ngIf=\"sidenav.opened\" mat-mini-fab class=\"my-fab\" (click)=\"sidenav.toggle()\">\n        <fa  name=\"times\"></fa>\n      </button>\n      <mat-toolbar class=\"my-toolbar\">\n        <mat-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 1\">\n          <span>Все каталоги</span>\n        </mat-toolbar-row>\n\n        <mat-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 2; edit = false\">\n          <span>Добавить каталог</span>\n        </mat-toolbar-row>\n      </mat-toolbar>\n\n    </mat-sidenav>\n\n    <button *ngIf=\"!sidenav.opened\" mat-mini-fab class=\"my-fab bars\" (click)=\"sidenav.toggle()\">\n      <fa  name=\"bars\"></fa>\n    </button>\n\n    <div class=\"my-container\">\n      <div [style.display]=\"menuToolbarActive === 1 ? '' : 'none'\" class=\"\">\n        <catalog-table  [change]=\"menuToolbarActive === 1\"  (onEdit)=\"catalog = $event; menuToolbarActive = 2; edit = true;\"></catalog-table>\n      </div>\n\n      <div [style.display]=\"menuToolbarActive === 2 ? '': 'none'\" class=\"my-card\">\n        <catalog-form [catalog]=\"catalog\" [edit]=\"edit\"></catalog-form>\n      </div>\n    </div>\n  </mat-sidenav-container>\n\n</div>\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

module.exports = "<div class=\"my-container\">\n  <mat-card>\n      <h3>Конфигурация для БД</h3>\n      <p>На стадии разработки</p>\n  </mat-card>\n</div>\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

module.exports = "  <div class=\"my-container\">\n    <div class=\"my-card  my-height my-overflow\">\n      <mat-card *ngIf=\"!success\">\n\n        <h1>Создайте склад или выберите из существующего</h1>\n\n        <mat-card-actions>\n          <a mat-raised-button *ngIf=\"stockName\" (keyup.enter)=\"createStockName(stockName)\" (click)=\"createStockName(stockName)\">Создать</a>\n        </mat-card-actions>\n        <mat-grid-list cols=\"2\">\n          <mat-grid-tile>\n            <mat-card-content>\n              <mat-form-field>\n                <input type=\"text\" matInput [(ngModel)]=\"stockName\" #ctrl =\"ngModel\"  required placeholder=\"Название склада\">\n              </mat-form-field>\n              <h1>{{stockName}}</h1>\n            </mat-card-content>\n          </mat-grid-tile>\n          <mat-grid-tile>\n            <mat-nav-list>\n              <mat-list-item *ngFor=\"let stock of stocks\" (click)=\"EnterCurrentStock(stock)\">\n                <h3>{{stock}}</h3>\n              </mat-list-item>\n            </mat-nav-list>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-card>\n\n      <mat-card *ngIf=\"success\">\n        <h1>Определите конфигурацию для склада: {{stockName}}</h1>\n        <mat-card-content>\n          <p>\n            Создается новый склад. Конфигурация основной таблицы.\n            Или выберети конфигурацию по умолчанию\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <a mat-raised-button (keyup.enter)='createStockConfig()' (click)='createStockConfig()'>По умолчанию</a>\n        </mat-card-actions>\n      </mat-card>\n\n    </div>\n  </div>\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

module.exports = "<div class=\"table-container mat-elevation-z9\">\n  <mat-table #table [dataSource]=\"dataSource\" [trackBy]=\"myTrackById\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"userId\">\n      <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <mat-header-cell *matHeaderCellDef> Progress </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"userName\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"color\">\n      <mat-header-cell *matHeaderCellDef>Color</mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk_collections__["d" /* DataSource */]));

//# sourceMappingURL=main-stock.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <ul>\n    <li>{{stockName}}</li>\n    <!-- <li><a routerLink='/main' routerLinkActive=\"active\">Склад</a></li> -->\n    <li *ngIf=\"!stockService.IsExistStock()\"><a routerLink='/create' routerLinkActive=\"active\">Cоздание склада</a></li>\n    <li *ngIf=\"stockService.IsExistStock()\"><a routerLink='/stock' routerLinkActive=\"active\">Склад</a></li>\n    <li *ngIf=\"stockService.IsExistStock()\"><a routerLink='/catalog' routerLinkActive=\"active\">Каталог товаров</a></li>\n    <li *ngIf=\"stockService.IsExistStock()\"><a routerLink='/production' routerLinkActive=\"active\">Производство</a></li>\n    <div class=\"right\">\n      <li *ngIf=\"stockService.IsExistStock()\"><a routerLink='/config' routerLinkActive=\"active\"><fa name=\"cog\" size=\"lg\"></fa></a></li>\n      <li *ngIf=\"stockService.IsExistStock()\"><a (click)=\"onResetStock()\"><span>{{stockService.getCurrentStock()}}</span> <fa name=\"external-link\" size=\"lg\"></fa></a></li>\n      <div class=\"min-menu\">\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n          <fa name=bars size=lg></fa>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <!-- <a mat-menu-item routerLink='/main' routerLinkActive=\"active\">Склад</a> -->\n          <a *ngIf=\"!stockService.IsExistStock()\" mat-menu-item routerLink='/create' routerLinkActive=\"active\">Создание склада</a>\n          <a *ngIf=\"stockService.IsExistStock()\" mat-menu-item routerLink='/stock' routerLinkActive=\"active\">Склад</a>\n          <a *ngIf=\"stockService.IsExistStock()\" mat-menu-item routerLink='/catalog' routerLinkActive=\"active\">Каталог товаров</a>\n          <a *ngIf=\"stockService.IsExistStock()\" mat-menu-item routerLink='/production' routerLinkActive=\"active\">Производство</a>\n          <a *ngIf=\"stockService.IsExistStock()\" mat-menu-item routerLink='/config' routerLinkActive=\"active\"><fa name=\"cog\" size=\"lg\"></fa></a>\n          <a *ngIf=\"stockService.IsExistStock()\" mat-menu-item (click)=\"onResetStock()\"><span>{{stockService.getCurrentStock()}}</span> <fa name=\"external-link\" size=\"lg\"></fa></a>\n        </mat-menu>\n      </div>\n    </div>\n</ul>\n\n</nav>\n\n<div class=\"pad-top\"></div>\n"

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
        var _this = this;
        this.stockService = stockService;
        this.router = router;
        this.active = false;
        this.stockService.IsActive().subscribe(function (result) { if (result)
            _this.router.navigate(['/stock']); });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onResetStock = function () {
        this.stockService.ExitCurrentStock();
        this.router.navigate(['/create']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

module.exports = "<div class=\"\">\n  \n  <mat-card>\n    <h1 align=center>Создать продукт</h1>\n    <form #createProduct=\"ngForm\" (ngSubmit)=\"onSubmit(createProduct)\" >\n      <mat-form-field>\n        <input matInput type=\"text\" name=\"name\" [(ngModel)]=\"product.name\" required placeholder=\"Название продукта\">\n      </mat-form-field>\n      <!-- <mat-card-actions> -->\n        <button  mat-raised-button [disabled]=\"!createProduct.form.valid\"  type=\"submit\">\n          Cоздать продукт\n        </button>\n        <button  mat-raised-button  type=\"reset\">Очистить</button>\n      <!-- </mat-card-actions> -->\n    </form>\n\n    <h2>Выбрать комплектующие</h2>\n    <div class=\"my-container mat-elevation-z8\">\n\n      <div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\">\n        <mat-form-field floatPlaceholder=\"never\">\n          <input matInput #filter placeholder=\"Filter\">\n        </mat-form-field>\n      </div>\n      <div class=\"example-header example-selection-header\"\n        *ngIf=\"!selection.isEmpty()\">\n        {{selection.selected.length}}\n        {{selection.selected.length == 1 ? 'element' : 'elements'}}\n        selected\n      </div>\n\n      <mat-table #table [dataSource]=\"dataSource\" matSort>\n      <!-- matSortActive=\"created\" matSortDisableClear matSortDirection=\"asc\"> -->\n\n      <!-- Checkbox Column -->\n      <ng-container matColumnDef=\"select\">\n        <mat-header-cell *matHeaderCellDef>\n          <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                       [checked]=\"isAllSelected()\"\n                       [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n          </mat-checkbox>\n        </mat-header-cell>\n        <mat-cell *matCellDef =\"let row\">\n          <mat-checkbox (click)=\"$event.stopPropagation()\"\n                       (change)=\"$event ? selection.toggle(row.name) : null\"\n                       [checked]=\"selection.isSelected(row.name)\">\n          </mat-checkbox>\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Имя </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"count\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header [style.flex]=\"'0 0 60px'\">Кол-во. </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.flex]=\"'0 0 60px'\">\n          <mat-form-field  [style.display]=\"selection.isSelected(row.name) ? '': 'none'\"\n          [style.width]=\"'60px'\">\n            <input matInput\n            type=\"number\" min=0 max=1000 value=\"0\" name=\"count\" [(ngModel)]=\"row.count\">\n          </mat-form-field>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n    <div class=\"example-no-results\"\n         [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n         Нет данных по данному фильтру.\n    </div>\n\n      <mat-paginator #paginator\n                    [length]=\"dataSource.filteredData.length\"\n                    [pageIndex]=\"0\"\n                    [pageSize]=\"5\"\n                    [pageSizeOptions]=\"[5, 10, 25, 100]\">\n      </mat-paginator>\n    </div>\n\n  </mat-card>\n\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_generic_data_sourse__ = __webpack_require__("../../../../../src/app/classes/generic-data-sourse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








;
var ProductCreateComponent = (function () {
    function ProductCreateComponent(_dataService) {
        this._dataService = _dataService;
        this.displayedColumns = ['select', 'name', 'count'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        this.catalog = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.product = {};
    }
    ProductCreateComponent.prototype.product_constituenst = function () {
        var _this = this;
        this.dataTable = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"](function (observer) {
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
        return this.dataTable;
    };
    ProductCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getCatalogs().subscribe({
            next: function (value) {
                value.map(function (obj) { return obj.count = 0; });
                _this.catalog.next(value);
            }
        });
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__classes_generic_data_sourse__["a" /* GenericDataSource */](this.catalog, this.sort, this.paginator, "name");
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    ProductCreateComponent.prototype.onSubmit = function (createProduct) {
        var _this = this;
        console.log(createProduct);
        console.log(createProduct.form.valid);
        if (createProduct.form.valid) {
            var dt_1 = [];
            this.product_constituenst().subscribe(function (data) {
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
        }
    };
    ProductCreateComponent.prototype.reset = function () {
        this.selection.clear();
    };
    ProductCreateComponent.prototype.changeSelected = function (row) {
        this.selection.toggle(row.name);
        if (this.selection.isSelected(row.name))
            row.count = 1;
        else
            row.count = 0;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */]) === "function" && _a || Object)
], ProductCreateComponent.prototype, "sort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */]) === "function" && _b || Object)
], ProductCreateComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _c || Object)
], ProductCreateComponent.prototype, "filter", void 0);
ProductCreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'product-create',
        template: __webpack_require__("../../../../../src/app/components/production/product-create/product-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/production/product-create/product-create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */]) === "function" && _d || Object])
], ProductCreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/production/product-table/product-table.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list *ngIf=\"load\" cols=\"1\" rowHeight=\"3:2\">\n  <mat-grid-tile>\n    <mat-spinner></mat-spinner>\n  </mat-grid-tile>\n</mat-grid-list>\n<ng-container *ngIf=\"!load\">\n  <h3 *ngIf=\"!products.length\">Создайте продукт используя каталог</h3>\n  <div *ngIf=\"products.length\">\n    <h3>Продукты</h3>\n    <ng-container  *ngFor=\"let product of products; let ind = index;\">\n      <mat-card>\n        <mat-card-header>\n          <h3>{{product.name}}</h3>\n        </mat-card-header>\n        <mat-card-actions>\n          <div align=\"left\" (click)=\"products[ind].show = !products[ind].show\">\n            <fa name=\"minus-square\" size=\"lg\" [hidden]=\"!products[ind].show\"></fa>\n            <fa name=\"plus-square\" size=\"lg\" [hidden]=\"products[ind].show\"></fa>\n          </div>\n        </mat-card-actions>\n        <mat-card-content *ngIf=\"products[ind].show\">\n          <table>\n            <tr>\n              <th>Деталь</th>\n              <th>Кол-во</th>\n            </tr>\n\n            <tr *ngFor=\"let elem of product.dataTable\">\n              <td>{{elem.name}}</td>\n              <td align=\"center\"><mat-chip [style.display]=\"'block'\" color=\"primary\" selected=\"true\">{{elem.count}}</mat-chip></td>\n            </tr>\n          </table>\n        </mat-card-content>\n      </mat-card>\n      <br>\n    </ng-container>\n  </div>\n</ng-container>\n"

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
            setTimeout(function () { _this.load = false; }, 500);
            _this.products.map(function (data) { return data.show = false; });
        });
        console.log(this.products);
    };
    return ProductTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], ProductTableComponent.prototype, "onEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ProductTableComponent.prototype, "change", null);
ProductTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

module.exports = "<div class=\"my-container\">\n\n  <mat-sidenav-container class=\"my-height\">\n    <mat-sidenav #sidenav mode=\"side\" opened=\"true\">\n      <button *ngIf=\"sidenav.opened\" mat-mini-fab class=\"my-fab\" (click)=\"sidenav.toggle()\">\n        <fa  name=\"times\"></fa>\n      </button>\n      <mat-toolbar class=\"my-toolbar\">\n        <mat-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 1\">\n          <span>Продукты</span>\n        </mat-toolbar-row>\n\n        <mat-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 2; edit = false\">\n          <span>Создать продукт</span>\n        </mat-toolbar-row>\n      </mat-toolbar>\n\n    </mat-sidenav>\n\n    <button *ngIf=\"!sidenav.opened\" mat-mini-fab class=\"my-fab bars\" (click)=\"sidenav.toggle()\">\n      <fa  name=\"bars\"></fa>\n    </button>\n\n    <div class=\"my-container\">\n      <div [style.display]=\"menuToolbarActive === 1 ? '' : 'none'\" class=\"\">\n        <product-table [change]=\"menuToolbarActive === 1\"  (onEdit)=\"catalog = $event; menuToolbarActive = 2; edit = true;\"></product-table>\n      </div>\n\n      <div [style.display]=\"menuToolbarActive === 2 ? '': 'none'\" class=\"my-card\">\n        <product-create></product-create>\n      </div>\n    </div>\n  </mat-sidenav-container>\n</div>\n"

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
    return ProductionComponent;
}());
ProductionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

module.exports = "<mat-card>\n  <h2>Выписать комплектующие</h2>\n  <!-- <button mat-raised-button>По продукции</button> -->\n  <form #expense=\"ngForm\" (ngSubmit)=\"onSubmit(expense)\" >\n    <mat-card-actions>\n      <button  mat-raised-button [disabled]=\"!expense.form.valid\"  type=\"submit\">\n        Выписать\n      </button>\n      <button  mat-raised-button (click)=\"reset()\">Очистить</button>\n    </mat-card-actions>\n  </form>\n\n  <div class=\"my-container mat-elevation-z8\">\n\n    <div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\">\n      <mat-form-field floatPlaceholder=\"never\">\n        <input matInput #filter placeholder=\"Filter\">\n      </mat-form-field>\n    </div>\n    <div class=\"example-header example-selection-header\"\n      *ngIf=\"!selection.isEmpty()\">\n      {{selection.selected.length}}\n      {{selection.selected.length == 1 ? 'element' : 'elements'}}\n      selected\n    </div>\n\n    <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n      <mat-header-cell *matHeaderCellDef  [style.flex]=\"'0 0 30px'\">\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                     [checked]=\"isAllSelected()\"\n                     [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </mat-header-cell>\n      <mat-cell *matCellDef =\"let row\"  [style.flex]=\"'0 0 30px'\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                     (change)=\"$event ? changeSelected(row) : null\"\n                     [checked]=\"selection.isSelected(row.name)\">\n        </mat-checkbox>\n      </mat-cell>\n    </ng-container>\n\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Имя </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"count\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header [style.flex]=\"'0 0 60px'\">Кол-во. </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\" [style.flex]=\"'0 0 60px'\">\n          <mat-form-field  [style.display]=\"selection.isSelected(row.name) ? '': 'none'\"\n          [style.width]=\"'60px'\">\n            <input matInput\n            type=\"number\" min=0 max={{row.count}} name=\"count\" [(ngModel)]=\"row.count2\">\n          </mat-form-field>\n        </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"measure\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Ед.Изм. </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.measure}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"price\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Цена </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.price}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"storePlace\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Место Хр. </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.storePlace}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Дата пр. </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.publishedDate | date:'short'}} </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n    <div class=\"example-no-results\"\n    [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n    Нет данных по данному фильтру.\n  </div>\n\n  <mat-paginator #paginator\n                [length]=\"dataSource.filteredData.length\"\n                [pageIndex]=\"0\"\n                [pageSize]=\"5\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-expense/stock-expense.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  position: relative; }\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.example-table {\n  overflow: auto;\n  min-height: 300px; }\n\n.mat-column-title {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden; }\n\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px; }\n\n.mat-column-created {\n  max-width: 124px; }\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-expense/stock-expense.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_stock_service__ = __webpack_require__("../../../../../src/app/services/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_generic_data_sourse__ = __webpack_require__("../../../../../src/app/classes/generic-data-sourse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
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
    function StockExpenseComponent(_dataService) {
        this._dataService = _dataService;
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* EventEmitter */]();
        this.displayedColumns = ['select', 'name', 'count', 'measure', 'price', 'storePlace', 'date'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        this.catalog = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    StockExpenseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getStockGoods().subscribe({
            next: function (value) {
                value.map(function (obj) { return obj.count2 = 0; });
                _this.catalog.next(value);
            }
        });
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__classes_generic_data_sourse__["a" /* GenericDataSource */](this.catalog, this.sort, this.paginator, "name");
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
            .debounceTime(150)
            .distinctUntilChanged()
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    StockExpenseComponent.prototype.onSubmit = function (data) {
        var _this = this;
        if (data.form.valid && !this.selection.isEmpty()) {
            var dt_1 = [];
            this.catalog.value.forEach(function (data) {
                if (_this.selection.isSelected(data.name))
                    dt_1.push({ _id: data._id, count: data.count2, price: data.price });
            });
            var expense = {};
            expense.data = dt_1;
            expense.stockName = this._dataService.getCurrentStock();
            console.log(expense);
            this._dataService.expenseGoods(expense, function (err) {
                if (err)
                    console.log('Not expense goods!!!');
                else {
                    console.log('Expense goods!!!');
                    data.form.reset();
                }
            });
        }
    };
    StockExpenseComponent.prototype.reset = function () {
        this.selection.clear();
    };
    StockExpenseComponent.prototype.changeSelected = function (row) {
        this.selection.toggle(row.name);
        if (this.selection.isSelected(row.name))
            row.count2 = 1;
        else
            row.count2 = 0;
    };
    StockExpenseComponent.prototype.isAllSelected = function () {
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
    StockExpenseComponent.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.renderedData.forEach(function (data) { _this.selection.select(data.name); if (!data.count)
                data.count2 = 1; });
        }
        else {
            this.catalog.value.forEach(function (data) { _this.selection.select(data.name); if (!data.count)
                data.count2 = 1; });
        }
    };
    return StockExpenseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], StockExpenseComponent.prototype, "onEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */]) === "function" && _a || Object)
], StockExpenseComponent.prototype, "sort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */]) === "function" && _b || Object)
], StockExpenseComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["g" /* ElementRef */]) === "function" && _c || Object)
], StockExpenseComponent.prototype, "filter", void 0);
StockExpenseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
        selector: 'stock-expense',
        template: __webpack_require__("../../../../../src/app/components/stock/stock-expense/stock-expense.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/stock/stock-expense/stock-expense.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_stock_service__["a" /* StockService */]) === "function" && _d || Object])
], StockExpenseComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=stock-expense.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-income/stock-income.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <h2 align=center>Приход деталей</h2>\n  <mat-grid-list cols=\"2\">\n    <!-- Catalog -->\n    <mat-grid-tile>\n      <div class=\"\">\n        <h4>Выбрать деталь из каталога или добавить новый</h4>\n        <div class=\"my-container mat-elevation-z8\">\n\n          <div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\">\n            <mat-form-field floatPlaceholder=\"never\">\n              <input matInput #filter placeholder=\"Filter\">\n            </mat-form-field>\n          </div>\n          <div class=\"example-header example-selection-header\"\n            *ngIf=\"!selection.isEmpty()\">\n            {{selection.selected.length}}\n            {{selection.selected.length == 1 ? 'element' : 'elements'}}\n            selected\n          </div>\n\n          <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n          <!-- Checkbox Column -->\n          <ng-container matColumnDef=\"select\">\n            <mat-header-cell *matHeaderCellDef  [style.flex]=\"'0 0 30px'\">\n              <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                           [checked]=\"isAllSelected()\"\n                           [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n              </mat-checkbox>\n            </mat-header-cell>\n            <mat-cell *matCellDef =\"let row\"  [style.flex]=\"'0 0 30px'\">\n              <mat-checkbox (click)=\"$event.stopPropagation()\"\n                           (change)=\"$event ? changeSelected(row) : null\"\n                           [checked]=\"selection.isSelected(row.name)\">\n              </mat-checkbox>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Имя </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"count\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header [style.flex]=\"'0 0 60px'\">Кол-во. </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.flex]=\"'0 0 60px'\">\n              <mat-form-field  [style.display]=\"selection.isSelected(row.name) ? '': 'none'\"\n              [style.width]=\"'60px'\">\n                <input matInput\n                type=\"number\" min=0 max=1000 value=\"0\" name=\"count\" [(ngModel)]=\"row.count\">\n              </mat-form-field>\n            </mat-cell>\n          </ng-container>\n\n          <ng-container matColumnDef=\"price\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header [style.flex]=\"'0 0 60px'\">Цена </mat-header-cell>\n            <mat-cell *matCellDef=\"let row\" [style.flex]=\"'0 0 60px'\">\n              <mat-form-field  [style.display]=\"selection.isSelected(row.name) ? '': 'none'\"\n              [style.width]=\"'60px'\">\n                <input matInput\n                type=\"number\" value=\"0\" requierd name=\"price\" [(ngModel)]=\"row.price\">\n              </mat-form-field>\n            </mat-cell>\n          </ng-container>\n\n\n          <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n          <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n        <div class=\"example-no-results\"\n             [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n             Нет данных по данному фильтру.\n        </div>\n\n        <mat-paginator #paginator\n                      [length]=\"dataSource.filteredData.length\"\n                      [pageIndex]=\"0\"\n                      [pageSize]=\"10\"\n                      [pageSizeOptions]=\"[5, 10, 25, 100]\">\n        </mat-paginator>\n\n      </div>\n\n      </div>\n\n    </mat-grid-tile>\n\n    <!-- Form -->\n    <mat-grid-tile>\n      <form #incomeGoods=\"ngForm\" (ngSubmit)=\"onSubmit(incomeGoods)\" >\n        <mat-card-actions>\n          <button  mat-raised-button [disabled]=\"!incomeGoods.form.valid\"  type=\"submit\">\n            Добавить в склад\n          </button>\n          <button  mat-raised-button  type=\"reset\" (click)=\"reset()\">Очистить</button>\n        </mat-card-actions>\n      </form>\n    </mat-grid-tile>\n  </mat-grid-list>\n\n  <!-- <product-create [product]=\"isSubmit\" (getDataFromCatalog)=\"dataTable = $event\"></product-create>  -->\n</mat-card>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_generic_data_sourse__ = __webpack_require__("../../../../../src/app/classes/generic-data-sourse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__ = __webpack_require__("../../../cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockIncomeComponent; });
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
        this.displayedColumns = ['select', 'name', 'count', 'price'];
        this.selection = new __WEBPACK_IMPORTED_MODULE_4__angular_cdk_collections__["a" /* SelectionModel */](true, []);
        this.catalog = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    StockIncomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getCatalogs().subscribe({
            next: function (value) {
                _this.catalog.next(value);
            }
        });
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__classes_generic_data_sourse__["a" /* GenericDataSource */](this.catalog, this.sort, this.paginator, "name");
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromEvent(this.filter.nativeElement, 'keyup')
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
        if (data.form.valid && !this.selection.isEmpty()) {
            var dt_1 = [];
            this.catalog.value.forEach(function (data) {
                if (_this.selection.isSelected(data.name))
                    dt_1.push({ _id: data._id, price: data.price, count: data.count });
            });
            var incomeData = {};
            incomeData.data = dt_1;
            incomeData.stockName = this._dataService.getCurrentStock();
            console.log(incomeData);
            this._dataService.incomeGoods(incomeData, function (err) {
                if (err)
                    console.log('Not income goods!!!');
                else {
                    console.log('Income new goods!!!');
                    data.form.reset();
                }
            });
        }
    };
    StockIncomeComponent.prototype.reset = function () {
        this.selection.clear();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */]) === "function" && _a || Object)
], StockIncomeComponent.prototype, "sort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */]) === "function" && _b || Object)
], StockIncomeComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === "function" && _c || Object)
], StockIncomeComponent.prototype, "filter", void 0);
StockIncomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'stock-income',
        template: __webpack_require__("../../../../../src/app/components/stock/stock-income/stock-income.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/stock/stock-income/stock-income.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_stock_service__["a" /* StockService */]) === "function" && _d || Object])
], StockIncomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=stock-income.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/stock/stock-table/stock-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <h1>Склад {{_dataService.getCurrentStock()}}</h1>\n  <div class=\"my-container mat-elevation-z8\">\n\n    <div class=\"example-header\">\n      <mat-form-field floatPlaceholder=\"never\">\n        <input matInput #filter placeholder=\"Filter\">\n      </mat-form-field>\n    </div>\n\n    <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Имя </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"count\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Кол-во </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.count}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"measure\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Ед.Изм. </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.measure}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"price\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Cр. Цена </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.price | number: '1.1-3'}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"storePlace\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Место Хр. </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.storePlace}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Дата пр. </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.publishedDate | date:'short'}} </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n    <div class=\"example-no-results\"\n         [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n         Нет данных по данному фильтру.\n    </div>\n\n    <mat-paginator #paginator\n    [length]=\"dataSource.filteredData.length\"\n    [pageIndex]=\"0\"\n    [pageSize]=\"5\"\n    [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n\n</div>\n\n</div>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_generic_data_sourse__ = __webpack_require__("../../../../../src/app/classes/generic-data-sourse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockTableComponent; });
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
        this.onEdit = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["s" /* EventEmitter */]();
        this.displayedColumns = ['name', 'count', 'measure', 'price', 'storePlace'];
        this.catalog = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    }
    StockTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getStockGoods().subscribe({ next: function (value) { return _this.catalog.next(value); } });
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__classes_generic_data_sourse__["a" /* GenericDataSource */](this.catalog, this.sort, this.paginator, "name");
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
    return StockTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["t" /* Output */])(),
    __metadata("design:type", Object)
], StockTableComponent.prototype, "onEdit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["F" /* MatSort */]) === "function" && _a || Object)
], StockTableComponent.prototype, "sort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatPaginator */]) === "function" && _b || Object)
], StockTableComponent.prototype, "paginator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* ViewChild */])('filter'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_core__["g" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_core__["g" /* ElementRef */]) === "function" && _c || Object)
], StockTableComponent.prototype, "filter", void 0);
StockTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
        selector: 'stock-table',
        template: __webpack_require__("../../../../../src/app/components/stock/stock-table/stock-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/stock/stock-table/stock-table.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__services_stock_service__["a" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_stock_service__["a" /* StockService */]) === "function" && _d || Object])
], StockTableComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=stock-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/stock/stock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"my-container\">\n\n  <mat-sidenav-container class=\"my-height\">\n    <mat-sidenav #sidenav mode=\"side\" opened=\"true\">\n      <button *ngIf=\"sidenav.opened\" mat-mini-fab class=\"my-fab\" (click)=\"sidenav.toggle()\">\n        <fa  name=\"times\"></fa>\n      </button>\n      <mat-toolbar class=\"my-toolbar\">\n        <mat-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 1\">\n          <span>Склад</span>\n        </mat-toolbar-row>\n\n        <mat-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 2;\">\n          <span>Приход</span>\n        </mat-toolbar-row>\n\n        <mat-toolbar-row class=\"my-toolbar-row\" (click)=\"menuToolbarActive = 3;\">\n          <span>Выписка</span>\n        </mat-toolbar-row>\n      </mat-toolbar>\n\n    </mat-sidenav>\n\n    <button *ngIf=\"!sidenav.opened\" mat-mini-fab class=\"my-fab bars\" (click)=\"sidenav.toggle()\">\n      <fa  name=\"bars\"></fa>\n    </button>\n\n    <div class=\"my-container\">\n      <div [style.display]=\"menuToolbarActive === 1 ? '' : 'none'\" class=\"\">\n        <!-- <product-table [change]=\"menuToolbarActive === 1\"  (onEdit)=\"catalog = $event; menuToolbarActive = 2; edit = true;\"></product-table> -->\n        <stock-table></stock-table>\n      </div>\n\n      <div [style.display]=\"menuToolbarActive === 2 ? '': 'none'\" class=\"my-card\">\n        <stock-income></stock-income>\n      </div>\n\n      <div [style.display]=\"menuToolbarActive === 3 ? '': 'none'\" class=\"my-card\">\n        <stock-expense></stock-expense>\n      </div>\n    </div>\n  </mat-sidenav-container>\n</div>\n"

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */])(),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
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
        this.stockName = null;
        this.active = false;
        this.loadStock();
    }
    // Use Local Storage for the save current stock
    StockService.prototype.storeStockData = function (stockName) {
        localStorage.setItem('currentStock', stockName);
    };
    StockService.prototype.loadStock = function () {
        var _this = this;
        this.stockName = "";
        this.IsActive().subscribe(function (result) {
            if (result)
                console.log("Observable IsActive true");
            _this.active = true;
            _this.stockName = localStorage.getItem('currentStock');
        });
    };
    StockService.prototype.IsActive = function () {
        var stock = localStorage.getItem('currentStock');
        // find in DB
        if (stock)
            return this._http.get("/api/stock?name=" + stock)
                .map(function (result) {
                if (result.json().data)
                    return true;
            });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].from([false]);
    };
    StockService.prototype.ExitCurrentStock = function () {
        this.stockName = null;
        localStorage.removeItem('currentStock');
    };
    StockService.prototype.IsExistStock = function () {
        return this.stockName && this.stockName.length !== 0;
    };
    StockService.prototype.getCurrentStock = function () {
        return this.stockName;
    };
    StockService.prototype.setCurrentStock = function (stockName) {
        this.storeStockData(stockName);
        this.stockName = stockName;
    };
    // Service for Stock
    StockService.prototype.createStock = function (name, callback) {
        this.stockName = name;
        this._http.get("/api/create?name=" + name)
            .subscribe(function (result) { return callback(!result.ok); });
    };
    StockService.prototype.configStock = function (config, callback) {
        this._http.post("/api/stock-config", config)
            .subscribe(function (result) { return callback(!result.ok); });
    };
    StockService.prototype.getStock = function () {
        var _this = this;
        return this._http.get("/api/stocks")
            .map(function (result) { return _this.result = result.json().data; });
    };
    // Service for Goods
    StockService.prototype.getStockGoods = function () {
        var _this = this;
        return this._http.get("/api/stock-goods?name=" + this.stockName)
            .map(function (result) { return _this.result = result.json().data; });
    };
    StockService.prototype.incomeGoods = function (goods, callback) {
        this._http.post("/api/income-goods", goods)
            .subscribe(function (result) { return callback(!result.ok); });
    };
    StockService.prototype.expenseGoods = function (goods, callback) {
        this._http.post("/api/expense-goods", goods)
            .subscribe(function (result) { return callback(!result.ok); });
    };
    // Service for Catalogs
    StockService.prototype.addCatalog = function (catalog, callback) {
        catalog.stockName = this.stockName;
        this._http.post("/api/add-catalog", catalog)
            .subscribe(function (result) { return callback(!result.ok); });
    };
    StockService.prototype.deleteCatalog = function (name, callback) {
        this._http.get("/api/delete-catalog?name=" + name + "&stockName=" + this.stockName)
            .subscribe(function (result) { return callback(!result.ok); });
    };
    StockService.prototype.getCatalogs = function () {
        var _this = this;
        return this._http.get("/api/catalogs?stockName=" + this.stockName)
            .map(function (result) { return _this.result = result.json().data; });
    };
    StockService.prototype.getCatalogById = function (_id) {
        var _this = this;
        console.log('service', _id);
        return this._http.get("/api/catalog?id=" + _id + "&stockName=" + this.stockName)
            .map(function (result) { return _this.result = result.json().data; });
    };
    // Service for product
    StockService.prototype.createProduct = function (dataProduct, callback) {
        console.log(dataProduct.dataTable);
        dataProduct.stockName = this.stockName;
        this._http.post("/api/create-product", dataProduct)
            .subscribe(function (result) { return callback(!result.ok); });
    };
    StockService.prototype.getProducts = function () {
        var _this = this;
        return this._http.get("/api/products?stockName=" + this.stockName)
            .map(function (result) { return _this.result = result.json().data; });
    };
    return StockService;
}());
StockService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */])(),
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