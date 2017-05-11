import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
  }

  getProjects() {
    return this.projects;
  }

  getProjectById(projectId: string) {
    return this.database.object('projects/' + projectId);
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  updateProject(localUpdateProject) {
    var updatedProject = this.getProjectById(localUpdateProject.$key);
    updatedProject.update({title: localUpdateProject.title, description: localUpdateProject.description, goal: localUpdateProject.goal, purpose: localUpdateProject.purpose, rewards: localUpdateProject.rewards, type: localUpdateProject.type, innovators: localUpdateProject.innovators});
  }

  deleteProject(localProjectToDelete) {
    var deletedProject = this.getProjectById(localProjectToDelete.$key);
    deletedProject.remove();
  }
}
