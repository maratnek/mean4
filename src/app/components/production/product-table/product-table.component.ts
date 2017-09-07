import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StockService } from '../../../services/stock.service';
import 'rxjs';
import {Subject} from 'rxjs';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  @Output() onEdit = new EventEmitter<any>();

  // products: Subject<any[]> = new Subject<any[]>();
  products: any[] = [];
  load:boolean = true;

  constructor(private _dataService: StockService) {
  }

  ngOnInit() {
    this._dataService.getProducts().subscribe(
      data => {
        this.products = data;
        console.log(this.products);
        setTimeout(()=>{this.load=false}, 1000);
        this.products.map(data => data.show = true);
       }
    );
    console.log(this.products);
  }

}
