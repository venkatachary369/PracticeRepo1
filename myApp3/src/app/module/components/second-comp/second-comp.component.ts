import { Component, OnInit } from '@angular/core';
import { checkModel, SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.scss']
})
export class SecondCompComponent implements OnInit {
  checkedData:checkModel ={ isChecked:false,
    selectedItem:[false,false,false,false]};

  constructor(private sharedService: SharedService) { }


  ngOnInit(): void {
    this.sharedService.getSharedSubject.subscribe(resp=>{
      this.checkedData= resp;
    })
  }
  setSharedData(data:any, index:number) {
    let setDate= {
      isChecked: false,
      selectedItem: this.checkedData?.selectedItem.map(item=>item.indexOf(index)== index?item=data.checked:item)
    }
    this.sharedService.setSharedSubject(setDate)
  }
}
