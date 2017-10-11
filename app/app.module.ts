import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { eventAppComponent } from './events-app.component';
import { eventListComponent } from './event-list/event-list.component';
import { eventThumbnailComponent } from './event-list/event-thumbnail.component';
import { navbarComponent } from './nav/navbar.component';
import { EventService } from './service/event-service'

@NgModule({
    imports: [BrowserModule],
    declarations: [eventAppComponent, eventListComponent, eventThumbnailComponent, navbarComponent],
    providers: [EventService],
    bootstrap: [eventAppComponent]
})

export class AppModule {

}