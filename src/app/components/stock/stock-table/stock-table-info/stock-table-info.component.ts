import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StockService } from '../../../../services/stock.service';

@Component({
  selector: 'app-stock-table-info',
  templateUrl: './stock-table-info.component.html',
  styleUrls: ['./stock-table-info.component.scss']
})
export class StockTableInfoComponent implements OnInit {

  good: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: StockService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    // this.good = this.route.paramMap
    //   .switchMap((params: ParamMap) =>
    //       this.service.getStoreGood(params.get('id'))
    //   );
    this.service.getStoreGood(id)
    console.log(this.good);
  }

}
