import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})

export class EditProjectComponent implements OnInit {
  @Input() selectedProject;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  beginUpdateProject(projectToUpdate) {
    this.projectService.updateProject(projectToUpdate);
  }

  beginDeleteProject(projectToDelete) {
    if(confirm("Are you sure you want to delete this project?!?!")){
      this.projectService.deleteProject(projectToDelete);
    }
  }
}
