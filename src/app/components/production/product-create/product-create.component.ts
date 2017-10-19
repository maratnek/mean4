import { Component, OnInit, Output, Input, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { StockService } from '../../../services/stock.service';
import {GenericDataSource} from '../../../classes/generic-data-sourse';

import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs';


export interface ProductElement {
  _id : string
  name : string
  count : number
}

interface Data extends ProductElement{};

@Component({
  selector: 'product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})

export class ProductCreateComponent implements OnInit {

  dataTable:Observable<Data[]>;
  product_constituenst(){
    this.dataTable = Observable.create(observer => {

      this.catalog.value.forEach((data:Data) => {
        if(this.selection.isSelected(data.name))
        {
          observer.next(data);
        }
      });
      observer.complete();
    });

    return this.dataTable;
  }


  displayedColumns = ['select', 'name', 'count'];
  selection = new SelectionModel<string>(true, []);
  dataSource: GenericDataSource<Data, "name"> | null;
  catalog: BehaviorSubject<Data[]> = new BehaviorSubject<Data[]>([]);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this._dataService.getCatalogs().subscribe({
      next: value => {
        value.map(obj => obj.count = 0);
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
  product: any = {};
  onSubmit(createProduct){
    console.log(createProduct);
    console.log(createProduct.form.valid);
    if (createProduct.form.valid){
      let dt = [];
      this.product_constituenst().subscribe(data =>
        dt.push(data) ,
        ()=>console.log("Error"),
        ()=>{
          this.product.dataTable = dt;
          console.log(this.product);

          this._dataService.createProduct(this.product, (err)=>{
            if (err)
            console.log('Not create new product!!!');
            else {
              console.log('Create new product SUCCESS!!!');
              createProduct.form.reset();
            }
          });
        }
      );
    }
  }

  reset():void {
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
