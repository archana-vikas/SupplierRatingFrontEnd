import { Component,Input } from "@angular/core/";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import {IUser} from './IUser';
import { Observable} from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import {UserService} from "./user.service"

@Component({
    selector:'',
    templateUrl:'./userEdit.component.html'
})
export class EditUserComponent  implements OnInit
{
    user:IUser;
    userId:number;
    errorMessage:string;
    private sub:any;
    

    constructor(private _userService:UserService, private route:ActivatedRoute)
    {

    }
    ngOnInit():void
    {
        this.sub = this.route.params.subscribe(params => {
            this.userId = +params['userId']; 
            console.log('Routed Data ID:' + this.userId);
        });
        this.getUserById();
        
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getUserById():void
    {
        this._userService.getUserById(this.userId)
        .subscribe(userToEdit=>{
            this.user=userToEdit;
            console.log('All' + JSON.stringify(this.user));
        },
        error=>this.errorMessage=<any>error);
    }
    updateUser():void{
        
            this._userService.updateUser(this.user)
            .subscribe(updatedUser=>{
                this.user=updatedUser;
                console.log('Allx:' + JSON.stringify(this.user));
            },
        error=>this.errorMessage=<any>error);  
            
    }

}