import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-licenses',
    templateUrl: './licenses.component.html',
    styleUrls: ['./licenses.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LicensesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
