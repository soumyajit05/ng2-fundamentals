import { Injectable } from '@angular/core';
import { EventService } from './event-service';
import { Resolve } from '@angular/router';

@Injectable()
export class eventslistresolver implements Resolve<any> {

    constructor(private eventservice: EventService) { }

    resolve() {
        console.log(232323);
        return this.eventservice.getAllEvents().map(events => events);
    }
}