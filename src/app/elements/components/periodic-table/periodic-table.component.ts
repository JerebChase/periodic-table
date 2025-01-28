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
    loadingPhrase!: string;

    loadingPhrases = [
      "Cooking up some noble gases...",
      "I'd tell you a joke, but... all the good ones Argon.",
      "Loading... because even Helium needs a moment to lift off.",
      "Periodic patience... we're still in our element.",
      "Getting our electrons together... they're being a bit negative.",
      "Arranging the table... someone spilled the alkali metals again!",
      "Hold on, we're splitting atoms to get this ready!",
      "One moment please. Sodium and Chloride got a bit explosive."
    ]
  
    ngOnInit() {
      this.loadingPhrase = this.loadingPhrases[Math.floor(Math.random() * this.loadingPhrases.length)];
      this.elementService.getElements().subscribe(elements => {
        this.elements = elements.sort((a, b) => a.atomicNumber - b.atomicNumber);
      });
    }
}
