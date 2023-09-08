import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faPlus, faPerson, 
  faInfo, faDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faAddIcon = faPlus;
  faPersonIcon = faPerson;
  faInfoIcon = faInfo;
  faCreateBillIcon = faDollar;

  selectedButton : string = "Add";

  btn_Add_Text : string = "Add";
  btn_CreateBill_Text: string = "Create Bill";
  btn_Profile_Text : string = "Profile";
  btn_About_Text : string = "About";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  showFocus(btnName: string) {
    this.selectedButton = btnName;
  }

}
