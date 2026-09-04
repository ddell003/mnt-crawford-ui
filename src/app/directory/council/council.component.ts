import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import jsonBoards from '../../../assets/content/directory.json';

@Component({
    selector: 'app-council',
    templateUrl: './council.component.html',
    styleUrls: ['./council.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CouncilComponent implements OnInit {

  townCouncil: any[] = [];
  sections: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.setTownCouncil();
  }

  setTownCouncil(): void {
    this.townCouncil = jsonBoards.town_council.members;
    this.sections = jsonBoards.town_council.sections;
  }


}
