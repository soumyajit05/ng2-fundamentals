import { Injectable } from '@angular/core';
import { IUser } from './user-model';
import { userInfo } from 'os';

@Injectable()
export class AuthService {
    user: IUser;
    login(username: string, password: string) {
        this.user = {
            id: 1,
            userName: username,
            firstName: "Jit",
            lastName: "Ray"
        }
    }

    isAuthenticated() {
        return !!this.user;
    }
}