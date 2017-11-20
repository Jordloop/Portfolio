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
    new Project('Cutthroat Caverns', 'Angular2/Firebase', "A card game.", "http://i.cubeupload.com/rThAxZ.png", "https://github.com/Jordloop/Cutthroat-Cavern-Web-App", "host"),
    new Project('Campsite Finder', 'Angular2/Firebase', "A camp site finder.", "http://i.cubeupload.com/Bb0SI4.png", "https://github.com/Jordloop/Campsite", "host"),
    new Project('Son of Cod', 'C#/.NET', "Some fish.", "http://u.cubeupload.com/Bompkins/ScreenShot20171113at.png", "https://github.com/Jordloop/SonOfCod", "host"),
  ]

}
