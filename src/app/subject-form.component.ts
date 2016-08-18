import { Component } from '@angular/core';
import { Subject } from './subject';

@Component({
    selector: 'subject-form',
    templateUrl: './subject-form.component.html'
})
export class SubjectFormComponent {
    subject: Subject;
}