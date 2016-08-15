import { Component } from '@angular/core';
import {CompanyDetailsComponent} from "./company-details.component";

@Component({
  selector: 'create-invoice',
  templateUrl: 'app/create-invoice.component.html',
  directives: [CompanyDetailsComponent]
})
export class CreateInvoiceComponent {
}
