import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SharedService {
    constructor(){}
    sharedSubject = new BehaviorSubject<checkModel>({isChecked:false,selectedItem:[false,false,false,false]});
    getSharedSubject = this.sharedSubject.asObservable();

    setSharedSubject(data:checkModel){
    this.sharedSubject.next(data)
    }
}
export class checkModel {
    isChecked:boolean=false;
    selectedItem:any[] =[];
}