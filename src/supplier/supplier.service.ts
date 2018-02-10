import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
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
    //To get list of Suppliers//
    getSuppliers(): Observable<ISupplier[]>
    {
       return this._http.get<ISupplier[]>(this._supplierUrl)
            .do(data=> console.log('All:' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    //To add(insert) supplier//
    addSupplier(newSupplier:ISupplier): Observable<ISupplier>
    {
        console.log('newSupplier is:'+ JSON.stringify(newSupplier));
        return this._http.put<ISupplier>(this._supplierUrl, newSupplier)
            .do(data=>console.log('All:'+ JSON.stringify(data)))
            .catch(this.handleError);

    }
    //Update Supplier//
    updateSupplier(supplier:ISupplier): Observable<ISupplier>
    {
        console.log('updatedSupplier is:'+ JSON.stringify(supplier));
        const header = new HttpHeaders().set('Content-Type', 'application/json')
        
        return this._http.post<ISupplier>(this._supplierUrl,supplier, {headers: header,})
        .do(data=>console.log('All:'+ JSON.stringify(data)))
        .catch(this.handleError);

    }
    //To Delete Supplier//
    deleteSupplier(supplier:ISupplier): Observable<Boolean>
    {
        return this._http.delete<Boolean>(this._supplierUrl+"/"+supplier.SupplierId)
        .do(data=>console.log('All:'+ JSON.stringify(data)))
        .catch(this.handleError);
    }

    getSupplierById(supplierId:Number): Observable<ISupplier>
    {
       return this._http.get<ISupplier>(this._supplierUrl+"/"+supplierId)
            .do(data=> console.log('All:' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    
    private handleError(err:HttpErrorResponse)
    {
        console.log("OOPs: " + this._supplierUrl+" - " +err.message);
        return Observable.throw(err.message);
    }
}