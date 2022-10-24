import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pipes-ex',
  templateUrl: './pipes-ex.component.html',
  styleUrls: ['./pipes-ex.component.css']
})
export class PipesExComponent implements OnInit {

  day = new Date();
  a: number = 0.12745;
  b = 1.09876;
  pi = 3.1415927;

  rows:any = {
    a:1,
    b:2
  }
  
  value: any;
  map:{[k:string]:string} = {
    
    '=0': 'No Msg',
    '=1': 'one msg',
    'other': 'hers',
  };
  constructor() {
    
   }

  ngOnInit(): void {
  }
// @ViewChild('input')
newDigit: number | undefined;

originalList: number[] = [];
impureSortableDigits: number[] = []
pureSortableDigits: number[] =[2,3,4,1]

addNewDigit() {
  if(this.newDigit== null)
  return
  this.originalList.push(this.newDigit);
  this.impureSortableDigits.push(this.newDigit);
  this.pureSortableDigits.push(this.newDigit);


}

// getInput(): HTMLInputElement {
  // return this.inputElement.nativeElement;
// }

}
