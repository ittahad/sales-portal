import { Expression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { NavService } from 'src/app/services/nav.service';
import { ProductService } from 'src/app/services/product.service';
import { Ripple, initTE } from 'tw-elements';
import { PeriodicElement } from '../showproducts/showproducts.component';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
  constructor(
    private router: Router, 
    private navService: NavService,
    private productService: ProductService) {
  }

  ngOnInit(): void {
    initTE({ Ripple });
    this.navService.toggleNavigation(this.router.url);
    this.totalCatagoryRemapped = this.reMapCategories(this.totalCatagory);
  }
  
  faAddIcon = faPlus;
  faDeleteIcon = faMinus;
  
  counter: number = 2;
  totalCatagory: ICatagory[] = [ { category: null, price: null, units: null } ];
  totalCatagoryRemapped: any = [];

  /* Variables */
  pcode: string = '';
  ptitle: string = '';
  pdescription: string = '';

  addNewCatagory() {
    this.totalCatagory.push({
      category: null,
      units: null,
      price: null
    });
    this.totalCatagoryRemapped = this.reMapCategories(this.totalCatagory);
  }

  reMapCategories(category: ICatagory[]) {
    return category.map((element, index) => {
      return { 
        elm: element,  
        idx: index};
    });
  }

  deleteRow($event: any) {
    console.log($event);
    this.counter--;
    this.totalCatagory.splice($event, 1);
    this.totalCatagoryRemapped = this.reMapCategories(this.totalCatagory);
  }

  updateCategoryRow($event: any) {
    var foundElement = this.totalCatagory[$event.idx];
    foundElement.category = $event.category;
    foundElement.units = $event.units;
    foundElement.price = $event.price;
  }

  saveItem() {
    let product: PeriodicElement = {
      pcode: this.pcode,
      ptitle: this.ptitle,
      pcategory: '',
      units: 0,
      price: 0,
      position: 0,
      action: ''
    };
    this.productService.addProduct(product);
  }
}

export interface ICatagory {
  category: string | null;
  units: number | null;
  price: number | null;
}
