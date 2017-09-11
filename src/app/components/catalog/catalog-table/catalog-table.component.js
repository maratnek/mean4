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
import { StockService } from '../../../services/stock.service';
import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdPaginator, MdSort, SelectionModel } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs';
var CatalogTableComponent = (function () {
    function CatalogTableComponent(_dataService) {
        this._dataService = _dataService;
        this.onEdit = new EventEmitter();
        this.displayedColumns = ['name', 'measure', 'price', 'storePlace', 'delete', 'edit'];
        this.selection = new SelectionModel(true, []);
        this.catalog = new BehaviorSubject([]);
    }
    CatalogTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.getCatalogs().subscribe({
            next: function (value) { _this.catalog.next(value); console.log(value); }
        });
        this.dataSource = new CatalogDataSource(this.catalog, this.sort, this.paginator);
        Observable.fromEvent(this.filter.nativeElement, 'keyup')
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
    Output(),
    __metadata("design:type", Object)
], CatalogTableComponent.prototype, "onEdit", void 0);
__decorate([
    ViewChild(MdSort),
    __metadata("design:type", MdSort)
], CatalogTableComponent.prototype, "sort", void 0);
__decorate([
    ViewChild(MdPaginator),
    __metadata("design:type", MdPaginator)
], CatalogTableComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild('filter'),
    __metadata("design:type", ElementRef)
], CatalogTableComponent.prototype, "filter", void 0);
CatalogTableComponent = __decorate([
    Component({
        selector: 'catalog-table',
        templateUrl: './catalog-table.component.html',
        styleUrls: ['./catalog-table.component.scss']
    }),
    __metadata("design:paramtypes", [StockService])
], CatalogTableComponent);
export { CatalogTableComponent };
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
        _this._filterChange = new BehaviorSubject('');
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
        return Observable.merge.apply(Observable, displayDataChanges).startWith(null)
            .switchMap(function () {
            _this.isLoadingResults = true;
            return _this.getSortedData();
        })
            .catch(function () {
            // Catch if the GitHub API has reached its rate limit. Return empty result.
            _this.isRateLimitReached = true;
            return Observable.of(null);
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
}(DataSource));
export { CatalogDataSource };
//# sourceMappingURL=catalog-table.component.js.map