import { Component, OnInit } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
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

  stateCtrl: FormControl;
  filteredStates: any;
  states = [
    'Alabama',
    'Alaska'
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(nm => this.filterStates(nm));
  }

  ngOnInit() {
  }

  onSubmit(addNewCatalog) {
    console.log(this.catalog);
  }

  storeSectore(){
    let data = [];
    let str = new String("ABCD");
    console.log(str.charAt(3));
    // for (let i : String = "A"; i < "Z"; i++) {
    //   console.log(i);
    //   data.push(i);
    // }
    return data;
  }

  filterStates(val: string) {
    return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
    : this.states;
  }

}
