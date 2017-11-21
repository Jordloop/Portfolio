import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor(public sb: MatSnackBar) { }

  ngOnInit() {

  }

  openSnackBar(action: string) {
    const message = 'jordloop@gmail.com';
    this.sb.open(message, action, {
      duration: 3000,
    });
  }


}
