import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-facilities',
    templateUrl: './facilities.component.html',
    styleUrls: ['./facilities.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FacilitiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
