import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "./auth-service";
import { Validators } from "@angular/forms";

@Component({
  selector: `profile-component`,
  templateUrl: 'app/users/profile.component.html'
})

export class ProfileComponent implements OnInit {

  private lastName: FormControl;
  private firstName: FormControl;
  profileFormGroup: FormGroup;

  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit() {
    this.lastName = new FormControl(this.authService.user.lastName, Validators.required);
    this.firstName = new FormControl(this.authService.user.firstName, Validators.required);

    this.profileFormGroup = new FormGroup({
      lastName: this.lastName,
      firstName: this.firstName
    });
  }

  validateLastName() {
    if (this.lastName.invalid || this.lastName.untouched) {
      // console.log(`lastname is dirty`);
      return false;
    }
    else {
      // console.log(`lastname is not that dirty`);
      return true;
    }
  }

  validateFirstName() {
    if (!(this.firstName.invalid || this.firstName.untouched)) {
      // console.log(`firstName is dirty`);
      return true;
    }
    else {
      // console.log(`firstName is not that dirty`);
      return false;
    }
  }

  Save() {
    if (this.profileFormGroup.valid) {
      // console.log('Form is valid');
      this.router.navigate(['events']);
    }
    else {
      // console.log(`missing entries`);
    }
  }

  Cancel() {
    this.router.navigate(['events']);
  }
}
