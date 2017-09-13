import { Component } from '@angular/core'

@Component({
    selector: 'event-list',
    // templateUrl: `/app/event-list/event-list.component.html`
    template:
    `<div>       
    <h1><event-thumbnail #thumbnail (buttonClick)="buttonClick($event)"
    [myEvent]="events1"></event-thumbnail></h1>
    <h4>{{thumbnail.templateVariable}}</h4>
    <h4>
    <button (click)="thumbnail.fooInsideThumbnail()">Test Template Variables</button>
    </h4>
    </div>
    `
})

export class eventListComponent {

    events1 = {
        startDate: `1st November, 2017`,
        endDate: `25th December, 2018`
    };

    location: string = `Las Vegas`;

    buttonClick(data) {
        console.log(`event starting on ${data}`);
    }
}