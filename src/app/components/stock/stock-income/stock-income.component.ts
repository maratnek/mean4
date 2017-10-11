import { Component, OnInit, Output, Input, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { StockService } from '../../../services/stock.service';
import {GenericDataSource} from '../../../classes/generic-data-sourse';

import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs';


interface Data {
  _id : string
  name : string
  count : number
  price: number
}

@Component({
  selector: 'stock-income',
  templateUrl: './stock-income.component.html',
  styleUrls: ['./stock-income.component.scss']
})
export class StockIncomeComponent implements OnInit {

  displayedColumns = ['select', 'name', 'count','price'];
  selection = new SelectionModel<string>(true, []);
  dataSource: GenericDataSource<Data, "name"> | null;
  catalog: BehaviorSubject<Data[]> = new BehaviorSubject<Data[]>([]);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this._dataService.getCatalogs().subscribe({
      next: value => {
        this.catalog.next(value);
      }
    });
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
    console.log(data);
    if (data.form.valid && !this.selection.isEmpty()) {
      let dt:any[] = [];
      this.catalog.value.forEach(data =>
        {
          if(this.selection.isSelected(data.name))
            dt.push({_id: data._id, price: data.price, count: data.count});
        }
      );
      let incomeData:any = {};
      incomeData.data = dt;
      incomeData.stockName = this._dataService.getCurrentStock();
      console.log(incomeData);

          this._dataService.incomeGoods(incomeData, (err)=>{
            if (err)
            console.log('Not income goods!!!');
            else {
              console.log('Income new goods!!!');
              data.form.reset();
            }
          });
    }
  }

  reset():void{
    this.selection.clear();
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
