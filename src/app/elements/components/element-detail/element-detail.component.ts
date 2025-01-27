import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../../../services/elements/element.service';

@Component({
    selector: 'element-detail',
    templateUrl: './element-detail.component.html',
    styleUrl: './element-detail.component.scss',
    standalone: false
})
export class ElementDetailComponent implements OnInit {
  constructor(private elementService: ElementService) { }

  ngOnInit() {
    this.elementService.getElement("1").subscribe(elementDetails => {
      debugger;
      console.log(elementDetails);
    });
  }
}
