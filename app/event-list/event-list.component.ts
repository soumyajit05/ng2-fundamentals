import { Component } from '@angular/core'

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
        </div>
    </div>
    `
})

export class eventListComponent {

    events1 = [
        {
            startDate: `1st November, 2017`,
            endDate: `25th December, 2018`
        },
        {
            startDate: `1st January, 2017`,
            endDate: `25th February, 2018`
        },
        {

            endDate: `4th October, 198`
        }
    ];

    location: string = `Las Vegas`;

    buttonClick(data) {
        console.log(`event starting on ${data}`);
    }
}