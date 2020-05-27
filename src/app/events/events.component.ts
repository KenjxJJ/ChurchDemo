import { Component, OnInit } from '@angular/core';
import { EventService } from './events.service';

@Component({
   selector : 'events',
   templateUrl: './events.component.html',
   styleUrls: ['events.component.css']
})

export class EventsComponent implements OnInit  {

  evts:any[];

  constructor(private events: EventService){}
  ngOnInit(){
      this.evts = this.events.getEvents();
  }

}

