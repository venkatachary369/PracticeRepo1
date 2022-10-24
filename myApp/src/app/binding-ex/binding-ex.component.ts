import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-ex',
  templateUrl: './binding-ex.component.html',
  styleUrls: ['./binding-ex.component.css']
})
export class BindingExComponent implements OnInit {

  pageHeader: string='Emp Details';
  firstName: string='Venkat';
  lastName: string='Chary';
  empDept: number=2526;
  columnSpan: number=3;
  // source: any='C:\Users\DELL\Downloads\1661241318238.jpg';
   styCls= {
    color: 'blue',
    fontSize: '30px',
}



  constructor() { 

  }

  ngOnInit(): void {
  }

}
