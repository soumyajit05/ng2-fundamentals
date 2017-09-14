import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'events-app',
    //template: `<h1>Event App Component loaded</h1>`
    template: `
                <nav-bar></nav-bar>
                <event-list></event-list>`
})

export class eventAppComponent implements OnInit {

    constructor() { }
    ngOnInit(): void { }

}