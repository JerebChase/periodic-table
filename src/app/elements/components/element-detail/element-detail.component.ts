import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../../../services/elements/element.service';
import { ActivatedRoute, Router } from '@angular/router';
import { elementDetail } from '../../models/element-detail.model';

@Component({
    selector: 'element-detail',
    templateUrl: './element-detail.component.html',
    styleUrl: './element-detail.component.scss',
    standalone: false
})
export class ElementDetailComponent implements OnInit {
  id!: string;
  elementDetails!: elementDetail;
  
  constructor(private route: ActivatedRoute, private router: Router, private elementService: ElementService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.elementService.getElement(this.id).subscribe(elementDetails => {
        this.elementDetails = elementDetails;
      });
    });
  }

  goBack = () => {
    this.router.navigate(['/elements']);
  }

  formatDiscoverer = (discoverer: string, year: number) => {
    if (discoverer === 'Prehistoric') {
      return discoverer;
    }
    
    const matches = [...discoverer.matchAll(/,/g)];
    if (matches && matches.length > 1) {
      discoverer = discoverer.substring(0, discoverer.lastIndexOf(',') + 1) + ' and' + discoverer.substring(discoverer.lastIndexOf(',') + 1);
    }
    if (matches && matches.length === 1) {
      discoverer = discoverer.replace(',', ' and');
    }
    return `Discovered by ${discoverer} in ${year}`;
  }
}
