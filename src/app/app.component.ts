import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  landing: boolean = true;
  about: boolean = false;

  constructor() {}

  landingClicked() {    
    this.landing = !this.landing;
    // this.about = !this.about;
  }
}
