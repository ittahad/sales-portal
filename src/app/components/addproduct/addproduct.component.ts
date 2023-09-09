import { Expression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { NavService } from 'src/app/services/nav.service';
import { Ripple, initTE } from 'tw-elements';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
  constructor(private router: Router, private navService: NavService) {
  }

  ngOnInit(): void {
    initTE({ Ripple });
    this.navService.toggleNavigation(this.router.url);
  }
  
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
