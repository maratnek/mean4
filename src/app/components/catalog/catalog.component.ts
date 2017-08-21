import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  measures = [
    {name: "Вес", ms: "кг."},
    {name: "Длина", ms: "метр"},
    {name: "Количество", ms: "шт."}
  ]

  constructor() { }

  ngOnInit() {
  }

}
