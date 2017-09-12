import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
// import { GoodElement } from './stock-income/stock-income.component';
// import {Observable} from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {


  menuToolbarActive:number = 1;

  constructor(
    private _dataService: StockService
  ) {
  }

  ngOnInit() {
  }


}
