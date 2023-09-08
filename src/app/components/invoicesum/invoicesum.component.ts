import { Component } from '@angular/core';
import { faS, faPrint, faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-invoicesum',
  templateUrl: './invoicesum.component.html',
  styleUrls: ['./invoicesum.component.css']
})
export class InvoicesumComponent {
  faPrintIcon = faPrint;
  faSaveIcon = faSave;
}
