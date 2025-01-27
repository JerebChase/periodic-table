import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../../../services/elements/element.service';

@Component({
    selector: 'element-list',
    templateUrl: './element-list.component.html',
    styleUrl: './element-list.component.scss',
    standalone: false
})
export class ElementListComponent implements OnInit {
    constructor(private elementService: ElementService) { }
  
    ngOnInit() {
      this.elementService.getElements().subscribe(elements => {
        debugger;
        console.log(elements);
      });
    }
}
