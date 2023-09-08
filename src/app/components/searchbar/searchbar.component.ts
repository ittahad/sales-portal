import { Component } from '@angular/core';
import { faS, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  faSearchIcon = faSearch;
}
