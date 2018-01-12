import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import {AuthService} from "./auth-service";

@Component({
    selector: `profile-component`,
    templateUrl:'app/users/profile.component.html'
})

export class ProfileComponent implements OnInit {

    lastName:any;
    firstName:any;
    profileFormGroup:FormGroup;

    constructor(private router:Router,private authService:AuthService) { }
    ngOnInit() { 
      this.lastName = new FormControl(this.authService.user.lastName);
      this.firstName = new FormControl(this.authService.user.firstName);

      this.profileFormGroup = new FormGroup({
        lastName:this.lastName,
        firstName:this.firstName
      });
    }

    Save()
    {
      this.router.navigate(['events']);
    }

    Cancel(){
      this.router.navigate(['events']);
    }
}