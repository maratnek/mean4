import { StockService } from '../../../services/stock.service';
import {GenericDataSource} from '../../../classes/generic-data-sourse';

import {Component, ViewChild, OnInit, ElementRef, Output, EventEmitter} from '@angular/core';
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
    this._dataService.getStockGoods().subscribe({
      next:value => {
        value.map(obj => obj.count = 0);
        this.catalog.next(value)
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
    if (data.form.valid && !this.selection.isEmpty()) {
      let dt:any[] = [];
      this.catalog.value.forEach(data =>
        {
          if(this.selection.isSelected(data.name))
            dt.push({_id: data._id, count: data.count, price: data.price});
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
