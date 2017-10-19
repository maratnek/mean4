import 'jquery';
import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StockService } from './services/stock.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';


// Angular material
// import {MaterialModule} from '@angular/material';
// import {CdkTableModule} from '@angular/cdk';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateStockComponent } from './components/create-stock/create-stock.component';
import { StockComponent } from './components/stock/stock.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductionComponent } from './components/production/production.component';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  // MatCoreModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';


import { CatalogFormComponent } from './components/catalog/catalog-form/catalog-form.component';
import { CatalogTableComponent } from './components/catalog/catalog-table/catalog-table.component';
import { ProductCreateComponent } from './components/production/product-create/product-create.component';
import { ProductTableComponent } from './components/production/product-table/product-table.component';
import { StockTableComponent } from './components/stock/stock-table/stock-table.component';
import { StockIncomeComponent } from './components/stock/stock-income/stock-income.component';
import { ConfigComponent } from './components/config/config.component';

import {StockGuard} from './guards/stock.guard';
import { StockExpenseComponent } from './components/stock/stock-expense/stock-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStockComponent,
    StockComponent,
    NavbarComponent,
    CatalogComponent,
    ProductionComponent,
    CatalogFormComponent,
    CatalogTableComponent,
    ProductCreateComponent,
    ProductTableComponent,
    StockTableComponent,
    StockIncomeComponent,
    ConfigComponent,
    StockExpenseComponent,
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatSortModule,
    // CdkTableModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //Material

    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    // MatCoreModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [StockService, StockGuard, StockService,
    {provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
