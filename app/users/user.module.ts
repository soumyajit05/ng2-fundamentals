import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routes';
import { loginComponent } from './login.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(UserRoutes), FormsModule],
    declarations: [ProfileComponent, loginComponent]
})

export class UserModule { }