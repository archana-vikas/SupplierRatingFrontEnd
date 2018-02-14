import {Component} from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { IUser } from "./IUser";
import { UserService } from "./user.service";
import {Observable} from "rxjs/Observable";
import{UserComponent} from "./user.component"
import { Router } from '@angular/router';

@Component({
    selector:'',
    templateUrl:'./userAdd.component.html'
})
export class AddUserComponent implements OnInit
{
    newUser: IUser;
    errorMessage: string;

    constructor(private _userService:UserService)
    {

    }

    ngOnInit():void{
        this.newUser={UserId:null, UserName:null, Role:null, Email:null, CreatedOn:null, Status:null}
    }

        addUser():void{
        
            this._userService.addUser(this.newUser)
            .subscribe(updatedUser=>{
                this.newUser=updatedUser;
                console.log('Allx:' + JSON.stringify(this.newUser));
            },
        error=>this.errorMessage=<any>error);        
    }

}