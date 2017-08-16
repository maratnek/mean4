import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


// Angular material
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateStockComponent } from './components/create-stock/create-stock.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStockComponent
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
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
