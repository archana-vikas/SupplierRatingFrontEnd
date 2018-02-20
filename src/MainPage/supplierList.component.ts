import { Component,Input,OnInit } from "@angular/core";
import { ISupplier } from "../supplier/ISupplier";
import {SupplierService} from "../supplier/supplier.service";
import { Router } from '@angular/router';
import{Observable} from "rxjs/Observable";
import { summaryFileName } from "@angular/compiler/src/aot/util";

@Component({
    selector:'rm-supplierList',
    templateUrl:'supplierList.component.html'
})
export class SupplierListComponent implements OnInit
{
    dropDownValue: string='Suppliers Name';
    @Input() supplierName:ISupplier[]=[];
    errorMessage: string;
    
    constructor(private _supplierService:SupplierService, private router:Router)
    {

    }
ngOnInit():void{
    this._supplierService.getSuppliers()
    .subscribe(supplierName=>{this.supplierName=supplierName;
        console.log('All:' + JSON.stringify(this.supplierName));
    
},
error=>this.errorMessage=<any>error);

}
}