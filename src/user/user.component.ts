import { Component } from "@angular/core";
import {IUser} from "./IUser";
import {UserService} from "./user.service";
import{Observable} from "rxjs/Observable";
import { OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { error } from "util";

@Component({
    selector:'rm-users',
    templateUrl:'./user.component.html',
})
export class UserComponent implements OnInit
{
    pageTitle:string='User List';
    users:IUser[]=[];
    errorMessage:string;
    result:Boolean;

    constructor(private _userService:UserService,private router:Router)
    {

    }
ngOnInit():void
{
    //To get List of Suppliers//
    this._userService.getUsers()
        .subscribe(users=>{
            this.users=users;
        },
            //console.log('All:'+JSON.stringify(this.users));
        
        error=>this.errorMessage=<any>error);    
}
//Method to Add User in the List//


//Method to make changes in the user//
editUser(user:IUser):void
{
    this.router.navigate(['users/Edit',user.UserId]);
}

//Method to  delete User//
deleteUser(user:IUser):void
{
    this._userService.deleteUser(user)
    .subscribe(result=>{this.result=result;
    console.log('Result of Delete:' + this.users.length);
    if(result){
        this.users=this.users.filter(u=>u.UserId!==user.UserId);
    }
    console.log('Count after Delete:' + this.users.length);
    },
     error=>this.errorMessage=<any>error);
    }

}


