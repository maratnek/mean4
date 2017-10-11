import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs';

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
              private _sort: MatSort,
              private _paginator: MatPaginator,
              private _key: KEY
            ) {
    super();
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<TYPE[]> {


    const displayDataChanges = [
      this.catalog,
      this._sort.sortChange,
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
