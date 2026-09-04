import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-building',
    templateUrl: './building.component.html',
    styleUrls: ['./building.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BuildingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
