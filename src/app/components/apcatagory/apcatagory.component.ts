import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPlus, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { ICatagory } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-apcatagory',
  templateUrl: './apcatagory.component.html',
  styleUrls: ['./apcatagory.component.css']
})
export class ApcatagoryComponent {
  @Input() category: ICatagory = {
    category: `Catagory`,
    units: 0,
    price: 0
  };
  
  @Output() deleteCatagoryRow = new EventEmitter<any>();

  faAddIcon = faPlus;
  faRemoveIcon = faMinusSquare;

  deleteCatRow() {
    this.deleteCatagoryRow.emit(this.category);
  }
}
