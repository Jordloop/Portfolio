import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  projects: Project[] = [
    new Project('Campsite Finder', 'html/css/JavaScript', "This is a basic web page I built with a team 5 weeks into coding at Epicodus. How it works is the user will fill out a couple forms, then the site will return some camp sites based on user input. We were even able to put an API  to use! I write most of the JavaScript while the rest of my team worked on design.", "../../assets/img/project-campsite.png", "https://github.com/Jordloop/Campsite", null),
    new Project('Cutthroat Caverns', 'Angular2/Firebase', 'This is an Angular 2 web app I worked on as part of a group project on my 5th week of the JavaScript course at Epicodus.As a team, myself and 3 others worked on creating a clone of the card game Cutthroat Caverns.My primary role was working in the back- end writing services that interacted with Firebase, and prepare the data in the components for the  design team to work with. One thing I would have done differently is separate systems into their own components, this would have made reading/ working on this app way easier.', "../../assets/img/project-CC.png", "https://github.com/Jordloop/Cutthroat-Cavern-Web-App", null),
    new Project('Son of Cod', 'C#/.NET', "This is a solo project I had to complete in an 8 hour window. The prompt was to create a web app that has a home page, the ability sign up for a newsletter, and log in/register admin to view newsletter sign up data. This was made using .NET framework and MSSQL. ", "http://u.cubeupload.com/Bompkins/SonOfCodscreenshotop.png", "https://github.com/Jordloop/SonOfCod", null),
  ]

}



