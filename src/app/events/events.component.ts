import { Component, OnInit } from '@angular/core';
import jsonEvents from '../../assets/content/announcements.json';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = [];
  title = 'Events';

  constructor() { }

  ngOnInit(): void {
    this.setEvents();
  }

  setEvents(): void {
    this.events = [];
    this.title = jsonEvents.events.page_name;
    for (const event of jsonEvents.events.events){
      console.log(event);
      if (event.name === 'Example Event Do not remove'){
        continue;
      }
      this.events.push(event);
    }
  }

}
