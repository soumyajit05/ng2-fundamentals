import { Component } from "@angular/core";
import { templateJitUrl } from "@angular/compiler";

@Component({
    selector: 'login-component',
    templateUrl: 'app/users/login.component.html'
})

export class loginComponent {

    login(formdata) {
        console.log(formdata);
    }

}