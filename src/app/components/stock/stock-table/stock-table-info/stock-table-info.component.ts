import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StockService } from '../../../../services/stock.service';
import { Chart } from 'chart.js';

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
    let data = [];
    let labels = [];
    this.service.getStoreGood(id).subscribe(it => {
      it.forEach(iter=>{
        console.log(iter);
        if (iter.action == 'INCOME'){
          labels.push(iter.publicDate);
          data.push(iter.price);
        }
      })
    });
    // console.log(this.);

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '# of Votes',
          data: data,
          // backgroundColor: [
          //   'rgba(255, 99, 132, 0.2)',
          //   'rgba(54, 162, 235, 0.2)',
          //   'rgba(255, 206, 86, 0.2)',
          //   'rgba(75, 192, 192, 0.2)',
          //   'rgba(153, 102, 255, 0.2)',
          //   'rgba(255, 159, 64, 0.2)'
          // ],
          // borderColor: [
          //   'rgba(255,99,132,1)',
          //   'rgba(54, 162, 235, 1)',
          //   'rgba(255, 206, 86, 1)',
          //   'rgba(75, 192, 192, 1)',
          //   'rgba(153, 102, 255, 1)',
          //   'rgba(255, 159, 64, 1)'
          // ],
          // borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            // type: 'time',
            // time: {
            //   // unit: 'month'
            //   displayFormats: {
            //       day: 'MMM D'
            //   }
            // }

            // // ,distribution: 'series'
          }]
        }
      }
    });
  }

}
