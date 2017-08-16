import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {CreateStockComponent} from './components/create-stock/create-stock.component';

const routes: Routes = [
  {
    path: '',
    children: [
    ]
  },
  {path: 'create', component: CreateStockComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
