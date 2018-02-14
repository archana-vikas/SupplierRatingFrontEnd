import {Injectable} from "@angular/core";
import {IUser} from "./IUser";
import {HttpClient, HttpErrorResponse,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class UserService
{
    private _userUrl='http://localhost:52672/api/user';
    
    constructor(private _http:HttpClient){}
    //Method to get User List//

    getUsers(): Observable<IUser[]>
    {
        return this._http.get<IUser[]>(this._userUrl)
            .do(data=>console.log('All:'+JSON.stringify(data)))
            .catch(this.handleError);
    }
    //Get User by Id//
    getUserById(userId:number): Observable<IUser>
    {
        return this._http.get<IUser>(this._userUrl+"/"+userId)
        .do(data=> console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);

    }
    //To Add new User//
    addUser(newUser:IUser):Observable<IUser>
    {
        console.log('newUser is:'+ JSON.stringify(newUser));      
        return this._http.put<IUser>(this._userUrl, newUser)
            .do(data=>console.log('All:'+ JSON.stringify(data)))
            .catch(this.handleError);

    }
    //Update User//
    updateUser(user:IUser): Observable<IUser>
    {
        console.log('updatedUser is:'+ JSON.stringify(user));
        const header = new HttpHeaders().set('Content-Type', 'application/json')
        
        return this._http.post<IUser>(this._userUrl,user, {headers: header,})
        .do(data=>console.log('All:'+ JSON.stringify(data)))
        .catch(this.handleError);

    }
    //Service to call delete method in webApi
    deleteUser(user:IUser): Observable<Boolean>
    {
        return this._http.delete<Boolean>(this._userUrl +"/"+ user.UserId)
        .do(data=>console.log('All:'+ JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(err:HttpErrorResponse)
    {
        console.log("OOPs: " + this._userUrl+" - " +err.message);
        return Observable.throw(err.message);
    }
}
