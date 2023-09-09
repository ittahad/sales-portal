import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NavService } from 'src/app/services/nav.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css'],
})
export class ShowproductsComponent implements OnInit {
  dataSource = new MatTableDataSource<PeriodicElement>();
  displayedColumns: string[] = [];

  constructor(
    private productService: ProductService, 
    private navService: NavService) { }
  
  ngOnInit(): void {
    this.displayedColumns = ['position', 'pcode', 'ptitle', 'pcategory', 'units', 'price', 'action'];
    this.reloadProducts();
    this.navService.listenHomePageProductsChange().subscribe(x => {
      this.reloadProducts();
    });
  }

  reloadProducts() {
    this.productService.getProducts().subscribe(x => {
      this.dataSource.data = x;
      debugger;
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
