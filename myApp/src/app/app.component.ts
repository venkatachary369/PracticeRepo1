import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  name ='Angular';
  myVar:any =
  {
    users:[
      {
        "id": 0,
        "name": "Adam Carter",
        "work": "Unilogic",
        "email": "adam.carter@unilogic.com",
        "dob": "1978",
        "address": "83 Warner Street",
        "city": "Boston",
        "optedin": true
      },
      {
        "id": 1,
        "name": "Leanne Brier",
        "work": "Connic",
        "email": "leanne.brier@connic.org",
        "dob": "1987",
        "address": "9 Coleman Avenue",
        "city": "Toronto",
        "optedin": false
      }
    ],
    userTitle :"UI"
  }
  }

  // }

// id: number;
// names: string;
// mail: string;

// constructor(id: number,names: string,mail: string) {
//   this.id = id;
//   this.names =names;
//   this.mail= mail;
// }
// objKeys = Object.keys;

//  x:any = {"id":"1","names":"venkat","mail":"@chary"};
 
 

// }


