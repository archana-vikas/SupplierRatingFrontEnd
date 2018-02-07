import {Component,Input} from "@angular/core";
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

export class EditSupplierComponent implements OnInit 
{
    errorMessage: string;
    @Input() supplier:ISupplier;

    constructor(private _supplierService:SupplierService)
    {

    }
    ngOnInit():void{
        this.supplier;
    }


    
    editSupplier():void{
        
            this._supplierService.updateSupplier(this.supplier)
            .subscribe(updatedSupplier=>{
                this.supplier=updatedSupplier;
                console.log('Allx:' + JSON.stringify(this.supplier));
            },
        error=>this.errorMessage=<any>error);        
    }

}