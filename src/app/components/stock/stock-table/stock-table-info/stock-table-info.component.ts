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
  borderC: string = '#4a148c';
  myChart: Chart;
  config: any = {};

  // Date format
  selectedFormat: string = 'month';

  dateFormats = [
    // {value: 'millisecond',viewValue: 'millisecond'},
    {value: 'second', viewValue: 'second'},
    {value: 'minute', viewValue: 'minute'},
    {value: 'hour', viewValue: 'hour'},
    {value: 'day', viewValue: 'day'},
    {value: 'week', viewValue: 'week'},
    {value: 'month', viewValue: 'month'},
    {value: 'quarter', viewValue: 'quarter'},
    {value: 'year', viewValue: 'year'}
  ];

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
      this.createChart(labels, data);

    });
  }

  createChart(labels:Array<any>, data:Array<any>){

    if(labels && labels.length && data && data.length && data.length == labels.length )
    {

      console.log(data, labels);
      var timeFormat = 'MM/DD/YYYY HH:mm';
      var ctx = document.getElementById("myChart");
      this.config =  {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: '# of Price',
            data: data,
            type: 'line',
            fill: false,
            // lineTension: 0,
            borderWidth: 2,
            borderColor: this.borderC,
            pointRadius: 5,
            pointHoverRadius: 10,
          }]
        },
        options: {
          scales: {
            xAxes: [{
              type: "time",
              time: {
                // format: timeFormat,
                // round: 'day'
                // tooltipFormat: 'll HH:mm'
                // unit:'month'
                unit: this.selectedFormat
              },
              scaleLabel: {
                display: true,
                labelString: 'Date'
              }
            }, ],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'value'
              }
            }]
          },
        }
      };
      this.myChart = new Chart(ctx,this.config);
    }

  }

  ChangeSelect(){
    console.log(this.selectedFormat);
    this.config.options.scales.xAxes[0].time.unit = this.selectedFormat;
    this.myChart.update();
  }

  ChangeColor(){
    console.log('Go teal !');
    this.config.data.datasets[0].borderColor = '#009688';
    console.log(this.config.options.scales.xAxes);
    // this.borderC = '#009688';
    this.myChart.update();
  }

}
