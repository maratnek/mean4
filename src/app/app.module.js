var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { MaterialModule } from '@angular/material';
// import {CdkTableModule} from '@angular/cdk';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateStockComponent } from './components/create-stock/create-stock.component';
import { MainStockComponent } from './components/main-stock/main-stock.component';
import { StockComponent } from './components/stock/stock.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductionComponent } from './components/production/production.component';
import { MdSortModule, } from '@angular/material';
import { CatalogFormComponent } from './components/catalog/catalog-form/catalog-form.component';
import { CatalogTableComponent } from './components/catalog/catalog-table/catalog-table.component';
import { ProductCreateComponent } from './components/production/product-create/product-create.component';
import { ProductTableComponent } from './components/production/product-table/product-table.component';
import { StockTableComponent } from './components/stock/stock-table/stock-table.component';
import { StockIncomeComponent } from './components/stock/stock-income/stock-income.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map