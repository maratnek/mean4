import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {CreateStockComponent} from './components/create-stock/create-stock.component';
import {StockComponent} from './components/stock/stock.component';
import {CatalogComponent} from './components/catalog/catalog.component';
import {ProductionComponent} from './components/production/production.component';
import {ConfigComponent} from './components/config/config.component';
import {StockGuard} from './guards/stock.guard';

const routes: Routes = [
  {path: '', redirectTo: '/create', pathMatch: 'full'},
  {path: 'create', component: CreateStockComponent},
  {path: 'catalog', component: CatalogComponent, canActivate:[StockGuard]},
  {path: 'production', component: ProductionComponent, canActivate:[StockGuard]},
  {path: 'stock', component: StockComponent, canActivate:[StockGuard]},
  {path: 'config', component: ConfigComponent, canActivate:[StockGuard]},
  // {path: 'stock', redirectTo: '/main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
