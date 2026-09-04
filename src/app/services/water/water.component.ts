import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-water',
    templateUrl: './water.component.html',
    styleUrls: ['./water.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class WaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
