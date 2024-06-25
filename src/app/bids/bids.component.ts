import { Component, OnInit } from '@angular/core';
import jsonEvents from '../../assets/content/announcements.json';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.component.html',
  styleUrls: ['./bids.component.css']
})
export class BidsComponent implements OnInit {

  events = [];
  title = 'Bids';

  constructor() { }

  ngOnInit(): void {
    this.setEvents();
  }

  setEvents(): void {
    this.events = [];
    this.title = jsonEvents.bids.page_name;
    for (const event of jsonEvents.bids.events){
      console.log(event);
      if (event.name === 'Example Bids'){
        continue;
      }
      this.events.push(event);
    }
  }

}
