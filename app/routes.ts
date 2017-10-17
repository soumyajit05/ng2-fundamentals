import { Routes } from '@angular/router';
import { eventListComponent } from './event-list/event-list.component';
import { eventDetails } from './event-details/event-details.component';
import { createEvent } from './event-details/create-event.component';
import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: 'events', component: eventListComponent },
    { path: '404', component: Error404Component },
    { path: 'events/new', component: createEvent },
    { path: 'events/:id', component: eventDetails },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]