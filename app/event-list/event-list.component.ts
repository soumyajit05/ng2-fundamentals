import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event-service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'event-list',
    // templateUrl: `/app/event-list/event-list.component.html`
    template:
    `<div>
        <div class="divStyle" *ngFor="let events of events1" >
            <event-thumbnail #thumbnail (buttonClick1)="buttonClick($event)"
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

export class eventListComponent implements OnInit {

    eventsFoodService: string;
    events1: any[];

    constructor(private eventService: EventService, private activateROute: ActivatedRoute) {

    }

    ngOnInit() {
        this.eventsFoodService = this.eventService.getEventsFood();
        // this.events1 = this.eventService.getAllEvents();
        this.eventService.getAllEvents().subscribe(events => { this.events1 = events })

        //this.events1 = this.activateROute.snapshot.data['events'];
        //alert(this.activateROute.snapshot.data[0]);
    }

    location: string = `Las Vegas`;

    buttonClick(data) {
        console.log(`event starting on ${data}`);
    }
}