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
import {MaterialModule} from '@angular/material';
// import {CdkTableModule} from '@angular/cdk';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateStockComponent } from './components/create-stock/create-stock.component';
import { MainStockComponent } from './components/main-stock/main-stock.component';
import { StockComponent } from './components/stock/stock.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductionComponent } from './components/production/production.component';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import { CatalogFormComponent } from './components/catalog/catalog-form/catalog-form.component';
import { CatalogTableComponent } from './components/catalog/catalog-table/catalog-table.component';
import { ProductCreateComponent } from './components/production/product-create/product-create.component';
import { ProductTableComponent } from './components/production/product-table/product-table.component';
import { StockTableComponent } from './components/stock/stock-table/stock-table.component';
import { StockIncomeComponent } from './components/stock/stock-income/stock-income.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStockComponent,
    MainStockComponent,
    StockComponent,
    NavbarComponent,
    CatalogComponent,
    ProductionComponent,
    CatalogFormComponent,
    CatalogTableComponent,
    ProductCreateComponent,
    ProductTableComponent,
    StockTableComponent,
    StockIncomeComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    MdSortModule,
    // CdkTableModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent],
})
export class AppModule { }
