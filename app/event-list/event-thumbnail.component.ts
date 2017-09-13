import { Component, Input, Output } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template:
    `
    <hr> Hosted at {{location}}
    <hr> timeline - {{event.startDate}} -- {{event.endDate}}
    `
})

export class eventThumbnailComponent {
    @Input() event: any;
    @Input() location: string;
    @Output() thumbnailTitle = `Angular 4 component`;
}