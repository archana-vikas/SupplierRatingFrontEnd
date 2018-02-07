import {Component} from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ISupplier } from "./ISupplier";
import { SupplierService } from "./supplier.service";
import {Observable} from "rxjs/Observable";
import{SupplierComponent} from "./supplier.component"
import { Router } from '@angular/router';

@Component({
    selector:'',
    templateUrl:'./supplierAdd.component.html'
})
export class AddSupplierComponent implements OnInit
{
    newSupplier: ISupplier;
    errorMessage: string;

    constructor(private _supplierService:SupplierService)
    {

    }

    ngOnInit():void{
        this.newSupplier={SupplierId:null, SupplierName:null,Service:null};
    }

    model: any={};
    addSupplier():void{
        
            this._supplierService.addSupplier(this.newSupplier)
            .subscribe(updatedSupplier=>{
                this.newSupplier=updatedSupplier;
                console.log('Allx:' + JSON.stringify(this.newSupplier));
            },
        error=>this.errorMessage=<any>error);        
    }

}