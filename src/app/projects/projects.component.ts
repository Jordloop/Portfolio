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
    new Project('Campsite Finder', 'Angular2/Firebase', "A camp site finder.", "http://u.cubeupload.com/Bompkins/campsitescreenshot.png", "https://github.com/Jordloop/Campsite", null),
    new Project('Cutthroat Caverns', 'Angular2/Firebase', 'This web application is a clone of a board game called Cutthroat Caverns that me and 3 other team members work on for a group project at Epicous. The team consisted of two design students and two C# students. Aside from some of the wireframe html on the game board, I worked in the services moving and manupulating data so that our design team had something to workwith. One thing I would do differently if I were to do write this app is make better use of Components, ensuring that each has a specific purpose. As it is we crammed way too much into our Components, which made our code much harder to manage and read.', "http://u.cubeupload.com/Bompkins/ccgameboard.png", "https://github.com/Jordloop/Cutthroat-Cavern-Web-App", null),
    new Project('Son of Cod', 'C#/.NET', "Some fish.", "http://u.cubeupload.com/Bompkins/SonOfCodscreenshotop.png", "https://github.com/Jordloop/SonOfCod", null),
  ]

}



