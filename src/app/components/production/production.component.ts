import { Component, OnInit } from '@angular/core';
import {ProductCreateComponent, ProductElement} from './product-create/product-create.component';
import {ProductTableComponent} from './product-table/product-table.component';
import {MatInputModule} from '@angular/material';
import {StockService} from '../../services/stock.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs';

@Component({
  selector: 'production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {
  dataTable: Observable<ProductElement[]>;
  isSubmit: boolean = false;
  product: any = {};

  menuToolbarActive = 1;
  // Edit for the update table
  edit: boolean = false;
  catalog: any = {};

  constructor(private _dataService: StockService) { }

  ngOnInit() {
  }

}
