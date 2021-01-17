import { Component, OnInit } from '@angular/core';

import '../../assets/js/active.js';

declare  var jQuery:  any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
 
export class LandingComponent implements OnInit {

  constructor() { }

  sermons:any = [];

  url(url:string){
    return url;
  }

  ngOnInit(): void {
    //jQuery.getScript('../../assets/js/active.js')
    
  }

}
