var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateStockComponent } from './components/create-stock/create-stock.component';
import { MainStockComponent } from './components/main-stock/main-stock.component';
import { StockComponent } from './components/stock/stock.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductionComponent } from './components/production/production.component';
var routes = [
    { path: '', redirectTo: '/create', pathMatch: 'full' },
    { path: 'create', component: CreateStockComponent },
    { path: 'main', component: MainStockComponent },
    { path: 'catalog', component: CatalogComponent },
    { path: 'production', component: ProductionComponent },
    { path: 'stock', component: StockComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map