import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

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