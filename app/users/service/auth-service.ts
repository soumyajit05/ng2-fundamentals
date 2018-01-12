// This service was created to demonstrate user login thorugh Form Validation

import {Injectable} from "@angular/core";
import {userData} from "./userData";

@Injectable()
export class authService{

currentUser:userData;

loginUser(username:string,password:string){
        this.currentUser = {
            id:1,
            firstName:"Jit",
            lastName:"Ray",
            userName:username
        }
    }
}