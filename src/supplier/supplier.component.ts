import { Component, OnInit } from "@angular/core";
import{SupplierService} from "./supplier.service";
import{Observable} from "rxjs/Observable";
import { ISupplier } from "./ISupplier";


@Component({
    selector:'rm-suppliers',
    templateUrl:'./supplier.component.html',
    styleUrls:['./supplier.component.css']
})
export class SupplierComponent implements OnInit{
    pageTitle: string ='Supplier List';
    suppliers: ISupplier[]=[];//[{"SupplierId":1,"SupplierName":"tcs","Service":"Project Management","Rating":"3"}];
    errorMessage: string;
    constructor(private _supplierService:SupplierService)
    {

    }
ngOnInit():void{
     //this.suppliers.push ({"SupplierId":1,"SupplierName":"txcs","Service":"Project Management","Rating":"3"}) 
     this._supplierService.getSuppliers()
            .subscribe(suppliers=>{
                this.suppliers=suppliers;
                console.log('Allx:' + JSON.stringify(this.suppliers));
            },
            error=>this.errorMessage=<any>error);        
}
}
