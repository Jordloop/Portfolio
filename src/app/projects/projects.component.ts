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
    new Project('Campsite Finder', "https://u.cubeupload.com/Bompkins/projectcampsite.png", "https://github.com/Jordloop/Campsite", null),
    new Project('Cutthroat Caverns', "https://u.cubeupload.com/Bompkins/projectCC.png", "https://github.com/Jordloop/Cutthroat-Cavern-Web-App", null),
    new Project('Son of Cod', "https://u.cubeupload.com/Bompkins/projectSOC.png", "https://github.com/Jordloop/SonOfCod", null),
  ]

}



