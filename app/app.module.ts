import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { eventAppComponent } from './events-app.component';
import { eventListComponent } from './event-list/event-list.component';
import { eventThumbnailComponent } from './event-list/event-thumbnail.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [eventAppComponent, eventListComponent, eventThumbnailComponent],
    bootstrap: [eventAppComponent]
})

export class AppModule {

}