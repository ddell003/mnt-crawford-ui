import { Component, OnInit } from '@angular/core';
import jsonBoards from '../../../assets/content/directory.json'

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

  setTownCouncil(): void {
    this.townCouncil = jsonBoards.town_council.members;
  }


}
