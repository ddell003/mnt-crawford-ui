import { Component, OnInit } from '@angular/core';
import jsonEvents from '../../assets/content/announcements.json';

@Component({
  selector: 'app-hearings',
  templateUrl: './hearings.component.html',
  styleUrls: ['./hearings.component.css']
})
export class HearingsComponent implements OnInit {

  events = [];
  title = 'Hearings';

  constructor() { }

  ngOnInit(): void {
    this.setEvents();
  }

  setEvents(): void {
    this.events = [];
    this.title = jsonEvents.hearings.page_name;
    for (const event of jsonEvents.hearings.events){
      console.log(event);
      if (event.name === 'Example Hearing'){
        continue;
      }
      this.events.push(event);
    }
  }

}
