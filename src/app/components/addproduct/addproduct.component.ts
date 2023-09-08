import { Expression } from '@angular/compiler';
import { Component } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  
  faAddIcon = faPlus;
  faDeleteIcon = faMinus;
  
  counter: number = 1;
  totalCatagory: ICatagory[] = [];

  addNewCatagory() {
    this.totalCatagory.push({
      category: `Catagory ${this.counter++}`,
      units: 10,
      price: 100
    });
  }

  deleteRow($event: any) {
    console.log($event);
    this.totalCatagory = this.totalCatagory.filter(x => x.category !== $event.category);
  }
}

export interface ICatagory {
  category: string;
  units: number;
  price: number;
}
