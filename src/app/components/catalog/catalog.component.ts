import { Component, OnInit} from '@angular/core';

import {CatalogTableComponent} from './catalog-table/catalog-table.component';
import {CatalogFormComponent} from './catalog-form/catalog-form.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  isSuppliersCheck = false;

  menuToolbarActive = 1;

  constructor() {
  }

  ngOnInit() {
  }

}
