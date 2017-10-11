import { StockService } from '../../../services/stock.service';
import { GenericDataSource } from '../../../classes/generic-data-sourse';

import {Component, ViewChild, OnChanges, OnInit, ElementRef, Output, Input, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator, MatSort, MatCardModule} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs';

interface Data {
  _id: number;
  name: string;
  measure: string;
  price: number;
  storePlace: string;
}

@Component({
  selector: 'catalog-table',
  templateUrl: './catalog-table.component.html',
  styleUrls: ['./catalog-table.component.scss']
})
export class CatalogTableComponent {

  @Output() onEdit = new EventEmitter<Data>();
  @Input() change: boolean;

  ngOnChanges(){
    console.log('Change my table');
    if (this.change)
      this._dataService.getCatalogs().subscribe({next:value => this.catalog.next(value)});
  }

  displayedColumns = ['name', 'measure', 'price', 'storePlace','delete','edit'];
  selection = new SelectionModel<string>(true, []);
  dataSource: GenericDataSource<Data, "name"> | null;
  catalog: BehaviorSubject<Data[]> = new BehaviorSubject<Data[]>([]);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this._dataService.getCatalogs().subscribe({next:value => this.catalog.next(value)});
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

  edit(catalog) {
    console.log('edit - ', catalog);
    let copy = Object.assign({}, catalog);
    this.onEdit.emit(copy);
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
