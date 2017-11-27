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
    new Experience('Epicodus', 'Apr-Oct 2017', 'Web Development Student', "As a student at Epicodus, a coding bootamp, I spent 8 hours a day, 4 days a week, pair programing; and ended each week with an 8 hour solo project. As a pair students would learn new concepts and techniques by ceate simple web applications. I rapidly progressed from creating simple html/css/JavaSctipt apps, to including SQL and NoSQL databases, using frameworks such as .NET and Angualr2. While the different languages and tools I learned to use are infinitely valuable, the most valuable thing was I learned how to learn how to program. Epicodues shaped me into an able web developer that is confident in his ability to learn new skills and technologies."
  ),
  ]

}
