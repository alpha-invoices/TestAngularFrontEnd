import { provideRouter, RouterConfig } from '@angular/router';
import {CreateInvoiceComponent} from './create-invoice.component';

export const routes: RouterConfig = [
  { path: 'invoice/create', component: CreateInvoiceComponent }
];

export const appRouterProvider = [provideRouter(routes)];
