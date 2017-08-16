import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Define a users property to hold our user data
  users: Array<any>;
  create = false;
  stockName = '';
  name = '';

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService, private router: Router) {

    // Access the Data Service's getUsers() method we defined
    this._dataService.getUsers()
        .subscribe(res => this.users = res);
  }

  createStock(stockName){
    console.log(stockName);
    this.router.navigate(['/create']);

  }

}
