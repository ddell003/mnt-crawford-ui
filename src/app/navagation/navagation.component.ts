import { Component, OnInit } from '@angular/core';
import jsonEvents from '../../assets/content/announcements.json';

@Component({
  selector: 'app-navagation',
  templateUrl: './navagation.component.html',
  styleUrls: ['./navagation.component.css']
})
export class NavagationComponent implements OnInit {

  bidCount = 0;
  eventCount = 0;
  hearingsCount = 0;
  noticeCount = 0;

  get totalAnnouncements(): number {
    return this.eventCount + this.hearingsCount + this.noticeCount;
  }

  ngOnInit(): void {
    this.setEvents();
  }

  setEvents(): void {
    for (const event of jsonEvents.events.events){
      if (event.name === 'Example Event Do not remove'){
        continue;
      }
      this.eventCount += 1;
    }

    for (const event of jsonEvents.bids.events){
      if (event.name === 'Example Bids'){
        continue;
      }
      this.bidCount += 1;
    }

    for (const event of jsonEvents.hearings.events){
      if (event.name === 'Example Hearing'){
        continue;
      }
      this.hearingsCount += 1;
    }

    for (const event of jsonEvents.notices.events){
      if (event.name === 'Example Notice'){
        continue;
      }
      this.noticeCount += 1;
    }
  }

}
