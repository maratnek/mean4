import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {StockService} from '../../services/stock.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  active: boolean = false;
  constructor(public stockService: StockService, private router: Router) {
    this.stockService.IsActive()
    .subscribe(result => {
      if(result)
        this.router.navigate(['/stock']);
      });
  }

  ngOnInit() {
  }

  onResetStock(){
    this.stockService.ExitCurrentStock();
  	this.router.navigate(['/create']);
  }

}
