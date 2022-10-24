import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child-ex',
  templateUrl: './child-ex.component.html',
  styleUrls: ['./child-ex.component.css']
})
export class ChildExComponent implements OnInit {
  @Input() message: string | undefined; 
  @Output() notify:EventEmitter<string> = new EventEmitter<string>();

  triggerCustomEvent() {
    this.notify.emit("Message from Child");
  }

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
