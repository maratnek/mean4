import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  stock: string = '';

  constructor(
    private _dataService: StockService
  ) {
  }

  ngOnInit() {
    this.stock = this._dataService.getCurrentStock();
  }

}
