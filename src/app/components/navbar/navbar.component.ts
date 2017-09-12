import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {StockService} from '../../services/stock.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private stockService: StockService, private router: Router) { }

  ngOnInit() {
  }

  onResetStock(){
    this.stockService.setCurrentStock('');
  	this.router.navigate(['/create']);
  }

}
