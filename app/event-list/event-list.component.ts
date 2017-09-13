import { Component } from '@angular/core'

@Component({
    selector: 'event-list',
    // templateUrl: `/app/event-list/event-list.component.html`
    template:
    `<div>       
    <h1><event-thumbnail  (buttonClick)="buttonClick($event)"
    [event]="events"></event-thumbnail></h1>
    </div>
    `
})

export class eventListComponent {

    events = {
        startDate: `1st November, 2017`,
        endDate: `25th December, 2018`
    };

    location: string = `Las Vegas`;

    buttonClick(data) {
        console.log(`event starting on ${data}`);
    }
}