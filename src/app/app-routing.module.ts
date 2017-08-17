import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {CreateStockComponent} from './components/create-stock/create-stock.component';
import {MainStockComponent} from './components/main-stock/main-stock.component';

const routes: Routes = [
  {path: '', redirectTo: '/create', pathMatch: 'full'},
  {path: 'create', component: CreateStockComponent},
  {path: 'main', component: MainStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
