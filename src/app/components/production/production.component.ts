import { Component, OnInit } from '@angular/core';
import {ProductionTableComponent} from './production-table/production-table.component';
import {MdInputModule} from '@angular/material';
import {StockService} from '../../services/stock.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {
  dataTable: any = {};
  isSubmit: boolean = false;
  product: any = {};

  constructor(private _dataService: StockService) { }

  ngOnInit() {
  }

  onSubmit(createProduct){
    console.log(createProduct);
    console.log(createProduct.form.valid);
    if (createProduct.form.valid){
      // let dt:Observable<any> = this.dataTable;

        // dt.subscribe(data => console.log(data));
      // get data from table catalog
      this.isSubmit = true;
      setTimeout(()=>{
        console.log(this.dataTable);
        this.product.dataTable = this.dataTable;
        console.log(this.product);

        this._dataService.createProduct(this.product, (err)=>{
          if (err)
          console.log('Not create new product!!!');
          else {
            console.log('Create new product SUCCESS!!!');
            createProduct.form.reset();
          }
        });

      },3000);
  }
}

}
