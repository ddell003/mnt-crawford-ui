import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-council',
  templateUrl: './council.component.html',
  styleUrls: ['./council.component.css']
})
export class CouncilComponent implements OnInit {

  townCouncil = [];
  constructor() { }

  ngOnInit(): void {
    this.setTownCouncil();
  }

  setTownCouncil() {
    /*
     <li>Dennis Driver &#45; Mayor</li>
                        <li>Shane Stevens &#45; Vice Mayor</li>
                        <li>Neal Dillard &#45; Council Member</li>
                        <li>Toni Ray &#45; Council Member</li>
                        <li> Bobby Taylor &#45; Council Member</li>
                        <li>JC Smythers &#45; Council Member</li>
    */
    this.townCouncil = [
      {name:"Neal Dillard", title: "Mayor"},
      {name:"Shane Stevens", title: "Vice Mayor"},
      {name:"Toni Ray", title: "Council Member"},
      {name:"Bobby Taylor", title: "Council Member"},
      {name:"JC Smythers", title: "Council Member"},
      {name:"Tasha Hoover", title: "Council Member"},
    ]

  }


}
