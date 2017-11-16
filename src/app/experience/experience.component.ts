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
    new Experience('Flight', 'Intern', "ScatterSchool is an Angular2 web application that took advantage of Firebase's real time database to provide a place for makers to colaborate, write tutorials, and build comunity. I primarially worked with the services that provided the components with the required data."),
    new Experience('Flight', 'Intern', "ScatterSchool is an Angular2 web application that took advantage of Firebase's real time database to provide a place for makers to colaborate, write tutorials, and build comunity. I primarially worked with the services that provided the components with the required data."),
    new Experience('Flight', 'Intern', "ScatterSchool is an Angular2 web application that took advantage of Firebase's real time database to provide a place for makers to colaborate, write tutorials, and build comunity. I primarially worked with the services that provided the components with the required data.")
  ]

}
