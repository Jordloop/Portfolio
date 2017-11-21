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
    new Project('Cutthroat Caverns', 'Angular2/Firebase', "This was a group project that myself and 3 others worked on as a final project of our Javascript course at Epicodus. ", "http://u.cubeupload.com/Bompkins/ccgameboard.png", "https://github.com/Jordloop/Cutthroat-Cavern-Web-App", null),
    new Project('Son of Cod', 'C#/.NET', "Some fish.", "http://u.cubeupload.com/Bompkins/SonOfCodscreenshotop.png", "https://github.com/Jordloop/SonOfCod", null),
  ]

}
