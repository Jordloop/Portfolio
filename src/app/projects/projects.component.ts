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
    new Project('Cutthroat Caverns', 'Angular2/Firebase', "A card game.", "http://u.cubeupload.com/Bompkins/ScreenShot20171113at.png", "repo", "host"),
    new Project('Cutthroat Caverns', 'Angular2/Firebase', "A card game.", "http://u.cubeupload.com/Bompkins/ScreenShot20171113at.png", "repo", "host"),
    new Project('Cutthroat Caverns', 'Angular2/Firebase', "A card game.", "http://u.cubeupload.com/Bompkins/ScreenShot20171113at.png", "repo", "host"),
    new Project('Cutthroat Caverns', 'Angular2/Firebase', "A card game.", "http://u.cubeupload.com/Bompkins/ScreenShot20171113at.png", "repo", "host")
  ]

}

// public title: string,
// public subtitle: string,
// public body: string,
// public screenshot: string,
// public repo: string,
// public host: string