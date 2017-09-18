import { StockService } from '../../../services/stock.service';

import {Component, ViewChild, OnInit, ElementRef, Output, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';
import {DataSource} from '@angular/cdk/collections';
import {MdPaginator, MdSort, SelectionModel} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs';

interface Data {
  _id: number;
  name: string;
  measure: string;
  price: number;
  storePlace: string;
  publishedDate: Date;
  count: number;
}

@Component({
  selector: 'stock-expense',
  templateUrl: './stock-expense.component.html',
  styleUrls: ['./stock-expense.component.scss']
})
export class StockExpenseComponent implements OnInit {

  @Output() onEdit = new EventEmitter<Data>();

  displayedColumns = ['select','name','count','measure', 'price', 'storePlace','date'];
  selection = new SelectionModel<string>(true, []);
  dataSource: GenericDataSource<Data, "name"> | null;
  catalog: BehaviorSubject<Data[]> = new BehaviorSubject<Data[]>([]);

  @ViewChild(MdSort) sort: MdSort;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this._dataService.getStockGoods()
    .subscribe({next:value => this.catalog.next(value)});
    this.dataSource = new GenericDataSource(this.catalog, this.sort, this.paginator, "name");
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
    .debounceTime(150)
    .distinctUntilChanged()
    .subscribe(() => {
      if (!this.dataSource) { return; }
      this.dataSource.filter = this.filter.nativeElement.value;
    });
  }

  constructor(private _dataService: StockService) {
  }

  onSubmit(data){
    if (data.form.valid){
      let dt:any[] = [];
      this.catalog.value.forEach(data =>
        {
          if(this.selection.isSelected(data.name))
            dt.push({_id: data._id, count: data.count});
        }
      );
      let expense:any = {};
      expense.dataTable = dt;
      expense.stockName = this._dataService.getCurrentStock();

      console.log(expense);
      this._dataService.expenseGoods(expense, (err)=>{
        if (err)
        console.log('Not expense goods!!!');
        else {
          console.log('Expense goods!!!');
          data.form.reset();
        }
      });
    }
  }


  changeSelected(row:Data){
    this.selection.toggle(row.name);
    if (this.selection.isSelected(row.name))
      row.count = 1;
    else
      row.count = 0;
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
      this.dataSource.renderedData.forEach(data => {this.selection.select(data.name); if (!data.count)data.count = 1;});
    } else {
      this.catalog.value.forEach(data => {this.selection.select(data.name); if (!data.count)data.count = 1;});
    }
  }

}


export class GenericDataSource<TYPE, KEY extends keyof TYPE> extends DataSource<any> {
   _filterChange = new BehaviorSubject('');
  get filter(): string { return this._filterChange.value; }
  set filter(filter: string) { this._filterChange.next(filter); }
  filteredData: TYPE[] = [];
  renderedData: TYPE[] = [];

  resultsLength: number = 0;
  isLoadingResults: boolean = false;
  isRateLimitReached: boolean;

  constructor(
              private catalog: BehaviorSubject<TYPE[]>,
              private _sort: MdSort,
              private _paginator: MdPaginator,
              private _key: KEY
            ) {
    super();
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<TYPE[]> {


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
          this.filteredData = result.slice().filter((item: TYPE) => {
            let getStr = (str:any):string=>{return str;};
            let searchStr = getStr(item[this._key]);
            searchStr = searchStr.toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) != -1;
          });
          // Sort filtered data
          // const sortedData = this.sortData(this.filteredData.slice());
          const sortedData = this.filteredData.slice();
          const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
          this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
          return this.renderedData;
        });
  }

  disconnect() {}

  getSortedData(): Observable<TYPE[]> {
    return this.catalog.map(data => {
      if (!this._sort.active || this._sort.direction == '') { return data; }

      return data.sort((a, b) => {
        let propertyA: number|string = '';
        let propertyB: number|string = '';

        [propertyA, propertyB] = [a[this._sort.active], b[this._sort.active]];

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
