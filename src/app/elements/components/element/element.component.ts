import { Component, Input } from '@angular/core';
import { element } from '../../models/element.model';

@Component({
    selector: 'element',
    templateUrl: './element.component.html',
    styleUrl: './element.component.scss',
    standalone: false
})
export class ElementComponent {
    @Input() element!: element;
}
