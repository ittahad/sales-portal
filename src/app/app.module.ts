import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ShowproductsComponent } from './components/showproducts/showproducts.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbuttonComponent } from './components/navbutton/navbutton.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ApcatagoryComponent } from './components/apcatagory/apcatagory.component';
import { CreatebillComponent } from './components/createbill/createbill.component';
import { BillentryComponent } from './components/billentry/billentry.component';
import { InvoicesumComponent } from './components/invoicesum/invoicesum.component';
import { ReceiptviewComponent } from './components/receiptview/receiptview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddproductComponent,
    ShowproductsComponent,
    HomeComponent,
    NavbuttonComponent,
    SearchbarComponent,
    ApcatagoryComponent,
    CreatebillComponent,
    BillentryComponent,
    InvoicesumComponent,
    ReceiptviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FontAwesomeModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
