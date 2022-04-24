import { AfterViewInit, Component, OnInit } from '@angular/core';
import { VCardModel } from './Models/v-card-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'QRBusinessCard';
  // vCardData : string = "";
  vCardModel: VCardModel; 
  
  // ngOnInit(): void {
  //   this.vCardData = `BEGIN:VCARD
  //   VERSION:3.0
  //   N:${this.vCardModel.firstName};${this.vCardModel.lastName}
  //   FN:${this.vCardModel.firstName} ${this.vCardModel.lastName}
  //   ORG:${this.vCardModel.workLoc}
  //   EMAIL:${this.vCardModel.email}
  //   TEL;TYPE=voice,work,pref:${this.vCardModel.workPhone}
  //   END:VCARD
  //   `
  // }
  
  vCardData:string = "";
  constructor() {
    this.vCardModel = {
      firstName: 'Stephen',
      lastName: 'Chambers',
      email: 'stephen_govinda@gmail.com',
      workLoc: 'Eurofins ETA',
      homePhone: '360-390-5412',
      workPhone: '360-802-3240',
      title: 'Web Development Manager'
    };
  }

  ngAfterViewInit(){
    let name = 'John',
    surname = 'Doe',
    org = 'Google',
    url = 'www.google.com',
    email = 'john@doe.com',
    tel = '000 111 222';

    this.vCardData = `BEGIN:VCARD
VERSION:3.0
N:${this.vCardModel.lastName};${this.vCardModel.firstName}
FN:${this.vCardModel.lastName} ${this.vCardModel.firstName}
ORG:${this.vCardModel.workLoc}
EMAIL:${this.vCardModel.email}
TEL;TYPE=voice,work,oref:${this.vCardModel.workPhone}
TITLE:${this.vCardModel.title}
END:VCARD
`
  }
}

