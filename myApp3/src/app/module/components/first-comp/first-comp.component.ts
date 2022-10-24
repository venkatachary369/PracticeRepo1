import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent implements OnInit {

  checkBoxData:any[]=[false,false,false,false];
  constructor(private sharedservice: SharedService) { }

  setCheckBox(event:any) {
    let data= {
      isChecked: event.checked,
      selectedItem:[event.checked,event.checked,event.checked,event.checked]
      
    }
    this.sharedservice.setSharedSubject(data)
  }

  ngOnInit(): void {
    this.sharedservice.getSharedSubject.subscribe(res=>this.checkBoxData=res.selectedItem)
  }

}
