import {Component} from "@angular/core";
import {Sender} from "./sender";

@Component({
  selector: 'sender-form',
  templateUrl: 'app/sender-form.component.html'
})

export class SenderFormComponent{
    sender:Sender;
}
