import { Component, OnInit } from '@angular/core';
import {ProductionTableComponent} from './production-table/production-table.component';
import {MdInputModule} from '@angular/material';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
