import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template:
    `
    <hr> Hosted at {{location}}
    <hr> timeline - {{myEvent.startDate}} -- {{myEvent.endDate}}

    <div>
    <h4>
    <button id="btn1" (click)="clickMe()">Click me !!</button>
    </h4>
    </div>
    `
})

export class eventThumbnailComponent {
    @Input() myEvent: any;
    @Input() location: string;
    @Output() thumbnailTitle = `Angular 4 component`;
    @Output() buttonClick = new EventEmitter();
    templateVariable: any = `Access child using template variables`;

    clickMe() {
        console.log(`Inside Event Thumbnail`);
        this.buttonClick.emit(this.myEvent.startDate);
    }

    fooInsideThumbnail() {
        console.log((`Using template variables`));
    }
}