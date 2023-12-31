import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-createbill',
  templateUrl: './createbill.component.html',
  styleUrls: ['./createbill.component.css']
})
export class CreatebillComponent implements OnInit {
  constructor(private router: Router, private navService: NavService) {
  }
  ngOnInit(): void {
    this.navService.toggleNavigation(this.router.url);
  }

}
