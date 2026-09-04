import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
