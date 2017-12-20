import { Routes } from '@angular/router';
import { eventListComponent } from './event-list/event-list.component';
import { eventDetails } from './event-details/event-details.component';
import { createEvent } from './event-details/create-event.component';
import { Error404Component } from './errors/404.component';
import { routeguard } from './service/event-route-activator.service';
import { eventslistresolver } from './service/events-list-resolver.service';

export const appRoutes: Routes = [
    { path: 'events', component: eventListComponent },
    { path: '404', component: Error404Component },
    { path: 'events/new', component: createEvent, canDeactivate: ['canDeactivateCreateEvent'], resolve: { events: eventslistresolver } },
    { path: 'events/:id', component: eventDetails, canActivate: [routeguard] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/users/user.module#UserModule' } // # is used for lazy loading components
]