import { Component } from '@angular/core';
import { AuthService } from '../users/auth-service';

@Component({
    selector: 'nav-bar',
    templateUrl: `app/nav/navbar.component.html`
})

export class navbarComponent {

    constructor(private authService: AuthService) {

    }
}

