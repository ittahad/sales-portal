import { Injectable } from '@angular/core';
import { PeriodicElement } from '../components/showproducts/showproducts.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, pcode: 'Hydrogen1', ptitle: 'Hydrogen', pcategory: 'Cat A', units: 1.0079, price: 100.0, action: ''},
    {position: 2, pcode: 'Hydrogen2', ptitle: 'Hydrogen', pcategory: 'Cat B', units: 1.0079, price: 100.0, action: ''},
  ];

  constructor() { }

  getProducts(): Observable<PeriodicElement[]> {
    let newRefTable: PeriodicElement[] = [];
    this.ELEMENT_DATA.map(x => newRefTable.push(x)); 
    return of(newRefTable);
  }

  addProduct(product: PeriodicElement): Observable<boolean> {
    this.ELEMENT_DATA.push({ 
      position: this.ELEMENT_DATA.length + 1, 
      pcode: product.pcode, 
      ptitle: product.ptitle, 
      pcategory: product.pcategory, 
      units: product.units, 
      price: product.price, 
      action: '' 
    })
    return of(true);
  }
}
