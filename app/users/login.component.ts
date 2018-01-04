import { Component } from "@angular/core";
import { templateJitUrl } from "@angular/compiler";
import { AuthService } from './auth-service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: 'app/users/login.component.html'
})

export class loginComponent {

    constructor(private authService: AuthService, private router: Router) {

    }

    login(formdata) {
        console.log(this.authService.isAuthenticated());
        this.authService.login(formdata.userName, formdata.password);
        console.log(this.authService.isAuthenticated());
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}