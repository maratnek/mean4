import { StockService } from '../../../services/stock.service';

import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import {Http, Response} from '@angular/http';
import {DataSource} from '@angular/cdk';
import {MdPaginator, MdSort, SelectionModel} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'catalog-table',
  templateUrl: './catalog-table.component.html',
  styleUrls: ['./catalog-table.component.scss']
})
export class CatalogTableComponent {
  displayedColumns = ['name', 'measure', 'price', 'storePlace','delete','edit'];
  selection = new SelectionModel<string>(true, []);
  dataSource: CatalogDataSource | null;
  catalog: BehaviorSubject<CatalogData[]> = new BehaviorSubject<CatalogData[]>([]);

  @ViewChild(MdSort) sort: MdSort;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this._dataService.getCatalogs().subscribe({
      next: value => {this.catalog.next(value);console.log(value);}
    });
    this.dataSource = new CatalogDataSource(this.catalog, this.sort, this.paginator);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
    .debounceTime(150)
    .distinctUntilChanged()
    .subscribe(() => {
      if (!this.dataSource) { return; }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
  }

  constructor(private _dataService: StockService) {
    // setTimeout(() => this.dataSource.connect(), 1)
  }

  delete(name) {
    console.log('delete - ', name);
    this._dataService.deleteCatalog(name, (err) => {
      if (err) console.log('Не удалось удалить каталог: ', name);
      else {
        this._dataService.getCatalogs().subscribe({
          next: value => this.catalog.next(value)
        });
        // this.success = true;
        console.log('Каталог ' + name + ' успешно удален.');
      }
    });
  }

  edit(_id) {
    console.log('edit - ', _id);

    // this._dataService.editCatalog(name, (err) => {
    //   if (err) console.log('Не удалось удалить каталог: ', name);
    //   else {
    //     this._dataService.getCatalogs().subscribe({
    //       next: value => this.catalog.next(value)
    //     });
    //     // this.success = true;
    //     console.log('Каталог ' + name + ' успешно удален.');
    //   }
    // });
  }

  isAllSelected(): boolean {
    if (!this.dataSource) { return false; }
    if (this.selection.isEmpty()) { return false; }

    if (this.filter.nativeElement.value) {
      return this.selection.selected.length == this.dataSource.renderedData.length;
    } else {
      return this.selection.selected.length == this.catalog.value.length;
    }
  }

  masterToggle() {
    if (!this.dataSource) { return; }

    if (this.isAllSelected()) {
      this.selection.clear();
    } else if (this.filter.nativeElement.value) {
      this.dataSource.renderedData.forEach(data => this.selection.select(data.name));
    } else {
      this.catalog.value.forEach(data => this.selection.select(data.name));
    }
  }

}

 interface CatalogData {
   _id: string;
   name: string;
   measure: string;
   price: number;
   storePlace: string;
 }

export class CatalogDataSource extends DataSource<any> {
   _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }
  filteredData: CatalogData[] = [];
  renderedData: CatalogData[] = [];

  resultsLength: number = 0;
  isLoadingResults: boolean = false;
  isRateLimitReached: boolean;
  // catalog: Observable<CatalogData[]>;

  constructor(
              // private _dataService: StockService,
              private catalog: BehaviorSubject<CatalogData[]>,
              private _sort: MdSort,
              private _paginator: MdPaginator) {
    super();
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<CatalogData[]> {


    const displayDataChanges = [
      this.catalog,
      this._sort.mdSortChange,
      this._filterChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges)
        .startWith(null)
        .switchMap(() => {
          this.isLoadingResults = true;
           return this.getSortedData();
        })
        .catch(() => {
          // Catch if the GitHub API has reached its rate limit. Return empty result.
          this.isRateLimitReached = true;
          return Observable.of(null);
        })
        .map(result => {
          // Flip flag to show that loading has finished.
          this.resultsLength = result.length;
          this.isLoadingResults = false;
          return result;
        })
        .map(result => {
          if (!result) { return []; }
          // Filter data
          this.filteredData = result.slice().filter((item: CatalogData) => {
            let searchStr = item.name.toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) != -1;
          });
          // Sort filtered data
          // const sortedData = this.sortData(this.filteredData.slice());
          const sortedData = this.filteredData.slice();

          // Grab the page's slice of the filtered sorted data.
          const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
          this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
          return this.renderedData;
          // this.isRateLimitReached = false;
          // this.resultsLength = result.total_count;
          // return result;
          // return this.readGithubResult(result);
        });
  }

  disconnect() {}

  getSortedData(): Observable<CatalogData[]> {
    return this.catalog.map(data => {
      if (!this._sort.active || this._sort.direction == '') { return data; }

      return data.sort((a, b) => {
        let propertyA: number|string = '';
        let propertyB: number|string = '';

        switch (this._sort.active) {
          case 'name': [propertyA, propertyB] = [a.name, b.name]; break;
          case 'measure': [propertyA, propertyB] = [a.measure, b.measure]; break;
          case 'price': [propertyA, propertyB] = [a.price, b.price]; break;
          case 'storePlace': [propertyA, propertyB] = [a.storePlace, b.storePlace]; break;
        }

        let valueA = isNaN(+propertyA) ? propertyA : +propertyA;
        let valueB = isNaN(+propertyB) ? propertyB : +propertyB;
        if (typeof valueA === 'string' && typeof valueB === 'string'){
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();
        }
        return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
      });
    });
  }
}
