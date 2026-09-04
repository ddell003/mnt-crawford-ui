import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-emergency',
    templateUrl: './emergency.component.html',
    styleUrls: ['./emergency.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class EmergencyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
