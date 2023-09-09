import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faPlus, faPerson, 
  faInfo, faDollar, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faAddIcon = faPlus;
  faPersonIcon = faPerson;
  faInfoIcon = faInfo;
  faCreateBillIcon = faFileInvoice;

  selectedButton : string = "Add";

  btn_Add_Text : string = "Add";
  btn_CreateBill_Text: string = "Invoice";
  btn_Profile_Text : string = "Profile";
  btn_About_Text : string = "About";

  constructor(
    private router: Router, 
    private navService: NavService) {
  }

  ngOnInit(): void {
    this.navService.listenNavigation().subscribe(x => {
      if(x === '') {
        this.selectedButton = this.btn_Add_Text;
      } else if(x === '/bill') {
        this.selectedButton = this.btn_CreateBill_Text;
      } else if(x === '/profile') {
        this.selectedButton = this.btn_Profile_Text;
      }
    });
  }

  showFocus(btnName: string) {
    this.navService.toggleNavigation(this.router.url);
    this.selectedButton = btnName;
  }

}
