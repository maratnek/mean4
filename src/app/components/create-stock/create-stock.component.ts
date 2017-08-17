import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StockService } from '../../services/stock.service';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent implements OnInit {

  create: boolean = false;
  // name = '';

  stockName = '';
  success: boolean = false;
  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: StockService) {
  }

  ngOnInit() {
  }

  createStock(stockName){
    this._dataService.createStock(stockName, (err) => {
      if (err) console.log('Не удалось создать склад: ', stockName);
      else {
          this.success = true;
          console.log('Склад ', stockName, ' создан');
          console.log('Сконфигурируте');
      }
    });
  }


}
