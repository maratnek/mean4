import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
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
  @Input() set change(isChange:boolean){
    if (isChange){
      console.log('change');
      this.ngOnInit();
    }
  }

  products: any[] = [];
  load:boolean = true;

  constructor(private _dataService: StockService) {
  }

  ngOnInit() {
    this._dataService.getProducts().subscribe(
      data => {
        this.products = data;
        console.log(this.products);
        setTimeout(()=>{this.load=false}, 500);
        this.products.map(data => data.show = false);
       }
    );
    console.log(this.products);
  }

}
