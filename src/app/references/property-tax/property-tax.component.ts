import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-property-tax',
    templateUrl: './property-tax.component.html',
    styleUrls: ['./property-tax.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class PropertyTaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
