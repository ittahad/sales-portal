import { Injectable } from '@angular/core';
import { PeriodicElement } from '../components/showproducts/showproducts.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, pcode: 'Hydrogen1', ptitle: 'Hydrogen', pcategory: 'Cat A', units: 1.0079, price: 100.0, action: ''},
    {position: 1, pcode: 'Hydrogen2', ptitle: 'Hydrogen', pcategory: 'Cat B', units: 1.0079, price: 100.0, action: ''},
  ];

  constructor() { }

  getProducts(): Observable<PeriodicElement[]> {
    return of(this.ELEMENT_DATA);
  }

  addProduct(product: PeriodicElement): Observable<boolean> {
    this.ELEMENT_DATA.push({ 
      position: this.ELEMENT_DATA.length++, 
      pcode: product.pcode, 
      ptitle: product.ptitle, 
      pcategory: product.pcategory, 
      units: product.units, 
      price: product.price, 
      action: '' 
    });
    return of(true);
  }
}
