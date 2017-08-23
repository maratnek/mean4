import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StockService } from '../../services/stock.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  isSuppliersCheck = false;

  measures = [
    {name: "Вес", ms: "кг."},
    {name: "Длина", ms: "метр"},
    {name: "Количество", ms: "шт."}
  ];
  catalog: any = {};

  stateControl: FormControl;
  filteredStates: any;
  states = [];

  constructor(private _dataService: StockService) {
  }

  ngOnInit() {
    this.stateControl = new FormControl();

    for (let i = 65; i < 26+65; i++)
      this.states.push(String.fromCharCode(i));

    this.filteredStates = this.stateControl.valueChanges
    .startWith(null)
    .map(name => this.filterStates(name));
    this.filteredStates.map(name=>console.log(name));

  }

  onSubmit(addNewCatalog) {
    this._dataService.addCatalog(this.catalog, (err)=>{
        if (err)
          console.log('Not add new catalog!!!');
    });
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
    : this.states;
  }

}
