import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StockService } from './services/stock.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


// Angular material
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateStockComponent } from './components/create-stock/create-stock.component';
import { MainStockComponent } from './components/main-stock/main-stock.component';
import { StockComponent } from './components/stock/stock.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateStockComponent,
    MainStockComponent,
    StockComponent,
    NavbarComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
