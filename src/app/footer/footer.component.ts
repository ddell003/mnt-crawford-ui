import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import '../../assets/js/active.js';

declare  var jQuery:  any;

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    jQuery.getScript('../../assets/js/active.js')
  }

}

