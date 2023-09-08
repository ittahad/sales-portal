import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreatebillComponent } from './components/createbill/createbill.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: AppComponent },
  { path: 'bill', component: CreatebillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
