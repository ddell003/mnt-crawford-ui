import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-real-estate-tax',
    templateUrl: './real-estate-tax.component.html',
    styleUrls: ['./real-estate-tax.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class RealEstateTaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
