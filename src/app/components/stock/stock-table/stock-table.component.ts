import { StockService } from '../../../services/stock.service';
import { GenericDataSource } from '../../../classes/generic-data-sourse';

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
  count: number;
}

@Component({
  selector: 'stock-table',
  templateUrl: './stock-table.component.html',
  styleUrls: ['./stock-table.component.scss']
})
export class StockTableComponent implements OnInit {

  @Output() onEdit = new EventEmitter<Data>();

  displayedColumns = ['name','count','measure','price', 'storePlace'];
  dataSource: GenericDataSource<Data, "name"> | null;
  catalog: BehaviorSubject<Data[]> = new BehaviorSubject<Data[]>([]);

  @ViewChild(MdSort) sort: MdSort;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this._dataService.getStockGoods().subscribe({next:value => this.catalog.next(value)});
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

}
