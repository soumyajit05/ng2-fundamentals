import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template:
    `
    <div class="divstyle">
        <hr> Hosted at {{location}}
        <hr> timeline - {{myEvent?.startDate}} -- {{myEvent.endDate}}
        <div *ngIf="myEvent?.website">
                event website - {{myEvent?.website}}
        </div>
        <div [hidden] ="!myEvent?.cost">
               <span > event cost - {{myEvent?.cost}}</span>
        </div>
        <div [ngSwitch] [class.green]= myEvent?.startTime>
            <span *ngSwitchCase  = "'8:00 am'"> {{myEvent.startTime}} - Early Start</span>
            <span *ngSwitchCase = "'10:00 am'"> {{myEvent.startTime}} - Late Start</span>
            <span *ngSwitchDefault> {{myEvent.startTime}} - Casual</span>
        </div>
    </div>
    <div>
        <h4>
            <button id="btn1" (click)="clickMe()">Click me !!</button>
        </h4>
    </div>
    `,
    styles: [`
            .divstyle  {color : red;}
            .green span {color: green; !important}
            `]
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