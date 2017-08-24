import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockService } from '../../services/stock.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import {DataSource} from '@angular/cdk';
import {MdSort} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  displayedColumns = ['catalogName', 'measure', 'price', 'storePlace'];
  exampleDatabase = new ExampleDatabase(this._dataService);
  dataSource: ExampleDataSource | null;

  @ViewChild(MdSort) sort: MdSort;

  isSuppliersCheck = false;

  measures = [
    {name: "Вес", ms: "кг."},
    {name: "Длина", ms: "метр"},
    {name: "Количество", ms: "шт."}
  ];
  catalog: any = {};
  // catalogData: any = {};

  stateControl: FormControl;
  filteredStates: any;
  states = [];

  menuToolbarActive = 1;

  constructor(private _dataService: StockService) {
  }

  ngOnInit() {

    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.sort);
    // setTimeout(()=>{
    //   this.dataSource.connect();
    // },
    //   30
    // );

    this.stateControl = new FormControl();

    for (let i = 65; i < 26+65; i++)
      this.states.push(String.fromCharCode(i));

    this.filteredStates = this.stateControl.valueChanges
    .startWith(null)
    .map(name => this.filterStates(name));
    this.filteredStates.map(name=>console.log(name));

    // console.log(this._dataService.getCatalogs().subscribe(data => this.catalogData = data));

  }

  reinitTable(){
    this.dataSource.reinit();
  }

  onSubmit(addNewCatalog) {
    console.log(addNewCatalog.form.valid);
    if (addNewCatalog.form.valid)
      this._dataService.addCatalog(this.catalog, (err)=>{
          if (err)
            console.log('Not add new catalog!!!');
          else
            addNewCatalog.form.reset();
      });
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
    : this.states;
  }

}

interface CatalogData {
  name: string;
  measure: string;
  price: number;
  storePlace: string;
}

/** An example database that the data source uses to retrieve data for the table. */
class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
  dataChange: BehaviorSubject<CatalogData[]>;
  get data(): CatalogData[] { return this.dataChange.value; }

  constructor(private _dataService: StockService) {
    this.init();
  }
  init(){
    console.log('ExampleDatabase');
    this.dataChange = new BehaviorSubject<CatalogData[]>([]);
    this._dataService.getCatalogs().subscribe((it) => {
      it.forEach((dt)=>{
        const copiedData = this.data.slice();
        copiedData.push(dt);
        this.dataChange.next(copiedData);
        // console.log(this.dataChange);

      });
    });
  }

}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _sort: MdSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<CatalogData[]> {
    return this._exampleDatabase.dataChange;
    // const displayDataChanges = [
    //   this._exampleDatabase.dataChange,
    //   this._sort.mdSortChange
    // ];
    //
    // return Observable.merge(...displayDataChanges).map(() => {
    //   return this.getSortedData();
    // });
  }

  reinit(){
    this._exampleDatabase.init();
  }

  getSortedData(): CatalogData[] {
    const data = this._exampleDatabase.data.slice();
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
  }

  disconnect() {}
}
