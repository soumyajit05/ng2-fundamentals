import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: `create-event`,
    template: `<h1>New Event</h1>
    <hr>
    <div class ="col-md-6">
        <button type="submit" class= "btn btn-primary">SAVE</button>
        <button type="button" class= "btn btn-default" (click)= "cancel_clikced()">CANCEL</button>
    </div>
    `
})

export class createEvent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() {
    }
    cancel_clikced() {
        this.router.navigate(['/events']);
    }
}