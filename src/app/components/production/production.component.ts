import { Component, OnInit } from '@angular/core';
import {ProductCreateComponent, ProductElement} from './product-create/product-create.component';
import {ProductTableComponent} from './product-table/product-table.component';
import {MdInputModule} from '@angular/material';
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

  constructor(private _dataService: StockService) { }

  ngOnInit() {
  }

  onSubmit(createProduct){
    console.log(createProduct);
    console.log(createProduct.form.valid);
    if (createProduct.form.valid){
      let dt = [];
      this.dataTable.subscribe(data =>
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
      this.isSubmit = true;
    }
  }
}
