import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse,HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Icategory } from "./Icategory";


@Injectable()
export class RatingService
{
    private _ratingUrl='http://localhost:52672/api/role/1/categories';

    constructor(private _http:HttpClient){}

    //Method to Get Categories for Rating for given IserId//

    getCategoriesByRoleId(): Observable<Icategory[]>
    {
        return this._http.get<Icategory[]>(this._ratingUrl)
        .do(data=>console.log('All:'+JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(err:HttpErrorResponse)
    {
        console.log("OOPs: " + this._ratingUrl+" - " +err.message);
        return Observable.throw(err.message);
    }
}
