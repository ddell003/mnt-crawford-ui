import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-trash',
    templateUrl: './trash.component.html',
    styleUrls: ['./trash.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TrashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
