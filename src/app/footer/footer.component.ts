import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { EmailSnackComponent } from '../email-snack/email-snack.component';

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

  // openSnackBar() {
  //   console.log('Snacky');
  //   const message: string = 'message';
  //   this.sb.open(message {
  //     duration: 3000
  //   });
  // }


}
