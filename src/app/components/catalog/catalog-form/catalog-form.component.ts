import { Component, OnInit, Input } from '@angular/core';
import { StockService } from '../../../services/stock.service';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import 'rxjs';

@Component({
  selector: 'catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.scss']
})
export class CatalogFormComponent implements OnInit {
  @Input() catalog: any = {};
  @Input() edit: boolean = false;

  measures = [
    {name: "Вес", ms: "кг."},
    {name: "Длина", ms: "метр"},
    {name: "Количество", ms: "шт."}
  ];
  // catalog: any = {};

  stateControl: FormControl;

  filteredStates: any;
  states = [];

  constructor(private _dataService: StockService) { }

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
    console.log(addNewCatalog.form.valid);
    if (addNewCatalog.form.valid){
      this.catalog.edit = this.edit;
      this._dataService.addCatalog(this.catalog, (err)=>{
          if (err)
            console.log('Not add new catalog!!!');
          else
            addNewCatalog.form.reset();
      });
    }
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
    : this.states;
  }

}
