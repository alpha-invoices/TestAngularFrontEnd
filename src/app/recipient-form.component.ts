import { Component } from '@angular/core';
import { Recipient } from './recipient';

@Component({
    selector: 'recipient-form',
    templateUrl: './recipient-form.html'
})
export class RecipientFormComponent {
    recipient: Recipient;

}