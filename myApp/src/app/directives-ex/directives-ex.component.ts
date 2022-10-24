import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-ex',
  templateUrl: './directives-ex.component.html',
  styleUrls: ['./directives-ex.component.css']
})
export class DirectivesExComponent implements OnInit {

  columnSpan = 2;

  people:any[] = [
    {
      "name": "venkat",
      "age": 28,
      "comp": "uss"
    },
    {
      "name": "chary",
      "age": 30,
      "comp": "simp"
    },
    {
      "name": "Lingoju",
      "age": 32,
      "comp": "mphs"
    }
  ];

  // another table============
  employee1: any[]=[
    {"name":"Ankit", "age":23, "salary":2000},
    {"name":"Bhanu", "age":24, "salary":2100},
    {"name":"Chary", "age":25, "salary":2200},
    {"name":"Dhanu", "age":26, "salary":2300}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
