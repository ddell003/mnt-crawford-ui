import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import jsonEvents from '../../assets/content/announcements.json';

@Component({
    selector: 'app-announcements',
    templateUrl: './announcements.component.html',
    styleUrls: ['./announcements.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AnnouncementsComponent implements OnInit {

  events: any[] = [];
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
