import { Component } from '@angular/core';
import { HomeMenuComponent } from  './home-menu.component';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [HomeMenuComponent]
})
export class AppComponent {
}
