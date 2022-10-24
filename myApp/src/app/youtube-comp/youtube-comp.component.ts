import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-comp',
  templateUrl: './youtube-comp.component.html',
  styleUrls: ['./youtube-comp.component.css']
})
export class YoutubeCompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
