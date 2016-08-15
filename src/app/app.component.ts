import { Component } from '@angular/core';
import { HomeMenuComponent } from  './home-menu.component';
import {ROUTER_DIRECTIVES} from "@angular/router";
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [HomeMenuComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}
