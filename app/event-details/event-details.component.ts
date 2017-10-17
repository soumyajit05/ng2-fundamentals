import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event-service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'event-details',
    templateUrl: '/app/event-details/event-details.component.html',
    styles: [`
    .container:{padding-left:20px; padding-right:20px;}
    `]
})

export class eventDetails implements OnInit {

    event: any;
    constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        this.event = this.eventService.getEventsById(+this.activatedRoute.snapshot.params['id']);
    }
} 