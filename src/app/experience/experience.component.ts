import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  experiences: Experience[] = [
    new Experience('Flight', 'Sep-Oct 2017', 'Intern', "As an intern I spent most of my time on this small team working in the back-end writing code that interacts with their NoSQL database. I worked with one other to develop an instant message system from scratch, as well as creating/updating functionality for bookmarks, tags, and comments. First team memeber to integrate Firebase Cloud Functions to the code base."),
  ]

}
