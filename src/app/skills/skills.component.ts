import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  skills: string[] = [
                      "HTML/CSS", 
                      "JavaScript", 
                      "TypeScript", 
                      "C#", 
                      "AngularCLI", 
                      "Angular2", 
                      "Angular Material", 
                      "Bootstrap", 
                      "ASP.NET", 
                      "Firebase", 
                      "NoSQL", 
                      "MySQL", 
                      "SQL", 
                      "API", 
                      "Node.js", 
                      "NPM", 
                      "OOP", 
                      "Git/Github", 
                      "MVC", 
                      "Command Line", 
                      "JSON", 
                      "jQuery",
                      "Problem Solving",
                      "Organization"
                    ];
}
