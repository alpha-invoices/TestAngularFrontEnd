import { provideRouter, RouterConfig } from '@angular/router';
import {CreateInvoiceComponent} from './create-invoice.component'
import {AppComponent} from './app.component';
export const routes: RouterConfig = [
  { path: '', component: AppComponent},
  { path: 'invoice/create', component: CreateInvoiceComponent}
];

export const appRouterProvider = [provideRouter(routes)];
