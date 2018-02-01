import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { ISupplier} from "./ISupplier";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class SupplierService
{
    private _supplierUrl='http://localhost:52672/api/supplier';
    constructor(private _http:HttpClient){}

    getSuppliers(): Observable<ISupplier[]>
    {
       return this._http.get<ISupplier[]>(this._supplierUrl)
       .do(data=> console.log('All:' + JSON.stringify(data)))
       .catch(this.handleError);
    }
    private handleError(err:HttpErrorResponse)
    {
        console.log("OOPs: " + this._supplierUrl+" - " +err.message);
        return Observable.throw(err.message);
    }
}