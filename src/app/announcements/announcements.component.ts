import { Component, OnInit } from '@angular/core';
import jsonEvents from '../../assets/content/announcements.json';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  events = [];
  title = 'Notices';

  constructor() { }

  ngOnInit(): void {
    this.setEvents();
  }

  setEvents(): void {
    this.events = [];
    this.title = jsonEvents.notices.page_name;
    for (const event of jsonEvents.notices.events){
      console.log(event);
      if (event.name === 'Example Notice'){
        continue;
      }
      this.events.push(event);
    }
  }

}
