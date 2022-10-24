import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-ex',
  templateUrl: './parent-ex.component.html',
  styleUrls: ['./parent-ex.component.css']
})
export class ParentExComponent implements OnInit {
  result: string;

  constructor() { 
    this.result= "I am @Input";
  }

  getData(result:string) {
    this.result= result;
    alert(result);
  }

  ngOnInit(): void {
  }

}
