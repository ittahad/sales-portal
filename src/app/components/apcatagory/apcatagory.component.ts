import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { ICatagory } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-apcatagory',
  templateUrl: './apcatagory.component.html',
  styleUrls: ['./apcatagory.component.css']
})
export class ApcatagoryComponent implements OnInit  {

  @Input() index = 0;
  @Input() category: any = {
  };
  
  @Output() deleteCatagoryRow = new EventEmitter<any>();
  @Output() changeCategoryRow = new EventEmitter<any>();

  faAddIcon = faPlus;
  faRemoveIcon = faMinusSquare;

  pcategory: string = '';
  punits: number = 0;
  pprice: number = 0;

  ngOnInit(): void {
    this.pcategory = this.category.category;
    this.punits = this.category.units;
    this.pprice = this.category.price;
  }

  deleteCatRow() {
    this.deleteCatagoryRow.emit(this.index);
  }

  passChange() {
    let rowData = {
      category: this.pcategory,
      units: this.punits,
      price: this.pprice,
      idx: this.index
    };
    this.changeCategoryRow.emit(rowData);
  }
}
