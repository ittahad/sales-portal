import { Expression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ICatagory } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-billentry',
  templateUrl: './billentry.component.html',
  styleUrls: ['./billentry.component.css']
})
export class BillentryComponent implements OnInit {
 
  faAddIcon = faPlus;
  faDeleteIcon = faMinus;

  counter: number = 2;
  totalCatagory: ICatagory[] = [ { category: null, price: null, units: null } ];
  totalCatagoryRemapped: any = [];
  
  constructor() {
  }
  
  ngOnInit(): void {
    this.totalCatagoryRemapped = this.reMapCategories(this.totalCatagory);
  }

  addNewCatagory() {
    this.totalCatagory.push({
      category: null,
      units: null,
      price: null
    });
    this.totalCatagoryRemapped = this.reMapCategories(this.totalCatagory);
  }

  deleteRow($event: any) {
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

  reMapCategories(category: ICatagory[]) {
    return category.map((element, index) => {
      return { 
        elm: element,  
        idx: index};
    });
  }
}
