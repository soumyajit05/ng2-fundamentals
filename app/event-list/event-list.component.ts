import { Component } from '@angular/core';
import { EventService } from '../service/event-service';

@Component({
    selector: 'event-list',
    // templateUrl: `/app/event-list/event-list.component.html`
    template:
    `<div>
        <div class="divStyle" *ngFor="let events of events1" >
            <event-thumbnail #thumbnail (buttonClick)="buttonClick($event)"
                [myEvent]="events"
                [location]="location"> 
            </event-thumbnail>
            <h4>template : {{thumbnail?.templateVariable}}</h4>
            <button (click)="thumbnail.fooInsideThumbnail()">Test Template Variables</button>
            <h5>Food Service : {{eventsFoodService}}</h5>
        </div>
    </div>
    `
})

export class eventListComponent {

    eventsFoodService: string;
    events1: any[];

    constructor(private eventService: EventService) {
        this.eventsFoodService = eventService.getEventsFood();
        this.events1 = eventService.getAllEvents();
    }



    location: string = `Las Vegas`;

    buttonClick(data) {
        console.log(`event starting on ${data}`);
    }
}