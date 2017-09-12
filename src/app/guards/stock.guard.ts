import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {StockService} from '../services/stock.service';

@Injectable()
export class StockGuard implements CanActivate {

	constructor(private stockService: StockService, private router: Router) {

	}

	canActivate(){
		if(this.stockService.IsExistStock()){
			return true;
		}else{
			this.router.navigate(['/create']);
			return false;
		}
	}
}
