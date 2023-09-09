import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  constructor(private router: Router, private navService: NavService) {
  }

  ngOnInit(): void {
    this.navService.toggleNavigation(this.router.url);
  }

}
