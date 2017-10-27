import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { eventAppComponent } from './events-app.component';
import { eventListComponent } from './event-list/event-list.component';
import { eventThumbnailComponent } from './event-list/event-thumbnail.component';
import { navbarComponent } from './nav/navbar.component';
import { EventService } from './service/event-service'
import { eventDetails } from './event-details/event-details.component';
import { appRoutes } from './routes';
import { createEvent } from './event-details/create-event.component';
import { Error404Component } from './errors/404.component';
import { routeguard } from './service/event-route-activator.service';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
    declarations: [eventAppComponent, eventListComponent, eventThumbnailComponent,
        navbarComponent, eventDetails, createEvent, Error404Component],
    providers: [EventService, routeguard],
    bootstrap: [eventAppComponent]
})

export class AppModule {

}