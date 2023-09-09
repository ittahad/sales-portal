import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css'],
})
export class ShowproductsComponent implements OnInit {
  dataSource : PeriodicElement[] = [];
  displayedColumns: string[] = [];
  // ELEMENT_DATA: PeriodicElement[] = [
  //   {position: 1, pcode: 'Hydrogen', ptitle: 'Hydrogen', pcategory: 'Cat A', units: 1.0079, price: 100.0, action: ''},
  //   {position: 1, pcode: 'Hydrogen', ptitle: 'Hydrogen', pcategory: 'Cat B', units: 1.0079, price: 100.0, action: ''},
  // ];

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.displayedColumns = ['position', 'pcode', 'ptitle', 'pcategory', 'units', 'price', 'action'];
    this.productService.getProducts().subscribe(x => {
      this.dataSource = x;
    });
  }
}


export interface PeriodicElement {
  position: number,
  pcode: string;
  ptitle: string;
  pcategory: string;
  units: number;
  price: number;
  action: string
}
