import { StockService } from '../../../services/stock.service';

import {Component, ViewChild, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {DataSource} from '@angular/cdk';
import {MdPaginator, MdSort} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';

@Component({
  selector: 'catalog-table',
  templateUrl: './catalog-table.component.html',
  styleUrls: ['./catalog-table.component.scss']
})
export class CatalogTableComponent implements OnInit {
  displayedColumns = ['catalogName', 'measure', 'price', 'storePlace'];
  dataSource: CatalogDataSource | null;

  @ViewChild(MdSort) sort: MdSort;
  @ViewChild(MdPaginator) paginator: MdPaginator;

  ngOnInit() {
    this.dataSource = new CatalogDataSource(this._dataService, this.sort, this.paginator);
  }

  constructor(private _dataService: StockService) {
    setTimeout(() => this.dataSource.connect(), 1000)
  }

}

 interface CatalogData {
   name: string;
   measure: string;
   price: number;
   storePlace: string;
 }

export class CatalogDataSource extends DataSource<any> {
  resultsLength: number = 0;
  isLoadingResults: boolean;
  isRateLimitReached: boolean;
  catalog: Observable<CatalogData[]>;
  constructor(private _dataService: StockService, private _sort: MdSort, private _paginator: MdPaginator) {
    super();
  }


  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<CatalogData[]> {
    this.catalog = this._dataService.getCatalogs();
    const displayDataChanges = [
      this.catalog,
      this._sort.mdSortChange,
    ];
    // If the user changes the sort order, reset back to the first page.
    this._sort.mdSortChange.subscribe(() => {
      this._paginator.pageIndex = 0;
    });
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
          this.isLoadingResults = false;
          return result;
        })
        .map(result => {
          if (!result) { return []; }

          this.isRateLimitReached = false;
          this.resultsLength = result.json().total_count;

          return this.readGithubResult(result);
        });
  }

  disconnect() {}

  private readGithubResult(result: Response): CatalogData[] {
    return result.json().items.map(issue => {
      return {
        name: issue.name,
        storePlace: issue.storePlace,
        price: issue.price,
        measure: issue.measure,
      };
    });
  }

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

        return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);
      });
    });
  }
}
