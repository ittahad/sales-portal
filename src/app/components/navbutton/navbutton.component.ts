import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbutton',
  templateUrl: './navbutton.component.html',
  styleUrls: ['./navbutton.component.css']
})
export class NavbuttonComponent {

  @Input() btnIcon: any;
  @Input() navigationLink: string = '';
  @Input() btnText: string = "";

  constructor() { }
}
