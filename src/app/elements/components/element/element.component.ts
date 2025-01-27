import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../../../services/elements/element.service';

@Component({
    selector: 'element',
    templateUrl: './element.component.html',
    styleUrl: './element.component.scss',
    standalone: false
})
export class ElementComponent implements OnInit {
  constructor(private elementService: ElementService) { }

  ngOnInit() {
    this.elementService.getElement("1").subscribe(elementDetails => {
      debugger;
      console.log(elementDetails);
    });
  }
}
