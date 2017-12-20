import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routes';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(UserRoutes)],
    declarations: [ProfileComponent]
})

export class UserModule { }