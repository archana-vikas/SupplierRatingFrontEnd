import { Component,Input} from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ISupplier } from "./ISupplier";
import { SupplierService } from "./supplier.service";
import { Observable} from "rxjs/Observable";
import { SupplierComponent} from "./supplier.component"
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'',
    templateUrl:'./supplierEdit.component.html'
})

export class EditSupplierComponent implements OnInit 
{
    errorMessage: string;
    supplier:ISupplier;
    supplierId:number;
    private sub: any;

    constructor(private _supplierService:SupplierService,private route: ActivatedRoute)
    {
    }

    ngOnInit():void{
        //TO void null errors
        //this.supplier={SupplierId:null, SupplierName:null,Service:null};
        
        this.sub = this.route.params.subscribe(params => {
            this.supplierId = +params['supplierId']; 
            console.log('Routed Data ID:' + this.supplierId);
        });
        this.getSupplier();
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getSupplier():void{
        //Call Supplier service method getSupplierById passing supplierById
        this._supplierService.getSupplierById(this.supplierId)
        .subscribe(supplierToEdit=>{
            this.supplier=supplierToEdit;
            console.log('All:' + JSON.stringify(this.supplier));
        },
        error=>this.errorMessage=<any>error);
    }

    updateSupplier():void{
        
            this._supplierService.updateSupplier(this.supplier)
            .subscribe(updatedSupplier=>{
                this.supplier=updatedSupplier;
                console.log('Allx:' + JSON.stringify(this.supplier));
            },
        error=>this.errorMessage=<any>error);        
    }

}