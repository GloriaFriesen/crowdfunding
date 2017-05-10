import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, goal: number, purpose: string, rewards: string, type: string, innovators: string) {
    var newProject: Project = new Project(title, description, goal, purpose, rewards, type, innovators);
    this.projectService.addProject(newProject);
  }

}
