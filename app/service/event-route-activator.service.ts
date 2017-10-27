import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from './event-service';

@Injectable()
export class routeguard implements CanActivate {

    constructor(private eventService: EventService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEventsById(+route.params[`id`]);
        if (!eventExists) {
            this.router.navigate([`/404`]);
        }
        return eventExists;
    }
}