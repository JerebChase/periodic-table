import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../../../services/elements/element.service';
import { element } from '../../models/element.model';

@Component({
    selector: 'periodic-table',
    templateUrl: './periodic-table.component.html',
    styleUrl: './periodic-table.component.scss',
    standalone: false
})
export class PeriodicTableComponent implements OnInit {
    constructor(private elementService: ElementService) { }
    elements!: element[];
  
    ngOnInit() {
      this.elementService.getElements().subscribe(elements => {
        this.elements = elements.sort((a, b) => a.atomicNumber - b.atomicNumber);
      });
    }
}
