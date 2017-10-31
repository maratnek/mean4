import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../../../services/stock.service';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import 'rxjs';

interface InterfaceCatalogForm {

}

@Component({
  selector: 'catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.scss']
})
export class CatalogFormComponent implements OnInit {
  @Input() catalog: any = {};
  @Input() edit: boolean = false;

  tMeasure: any = null;

  measures = [
    {name: "weight", measure: "kg."},
    {name: "length", measure: "metr"},
    {name: "quantity", measure: "piece"}
  ];

  stateControl: FormControl;
  isSuppliersCheck: boolean = false;

  filteredStates: any;
  states = [];

  constructor(private _dataService: StockService, private _router: Router) { }

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
          else {
            addNewCatalog.form.reset();
            this._router.navigate(['/catalog']);
          }
      });
    }
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
    : this.states;
  }

}
