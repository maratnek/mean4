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

  // Define a users property to hold our user data
  stocks: Array<any> = [];
  create: boolean = false;
  name = '';

  stockName: string = '';
  success: boolean = false;
  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: StockService, private router: Router) {
    this._dataService.getStock()
        .subscribe(res => {this.stocks = res; console.log(res)});
  }

  ngOnInit() {
  }

  createStockName(stockName){
    this._dataService.createStock(stockName, (err) => {
      if (err) console.log('Не удалось создать склад: ', stockName);
      else {
          this.success = true;
          console.log('Склад ', stockName, ' создан');
          console.log('Сконфигурируте');
      }
    });
  }

  private correctName(){
    if (this.stockName.length)
      return true;
    return false;
  }

  createStockConfig(){
    console.log('create stock config');
    if (this.correctName()) {
      let config = {
        name: this.stockName,
        price: true
      };
      this._dataService.configStock(config, (err) => {
        if (err) console.log('Не удалось создать конфигурацию для склада: ', config);
        else {
          console.log('Склад сконфигурирован: config', config);
          this.router.navigate(['/catalog']);
        }
      });
    } else {
      console.log('Некорректное имя для Склада');
    }
  }


}
