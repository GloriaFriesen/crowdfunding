import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProjectService]
})
export class HomeComponent implements OnInit {
  currentRoute: string = this.router.url;
  projects: FirebaseListObservable<any[]>;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  goToDetailPage(clickedProject) {
    this.router.navigate(['projects', clickedProject.$key]);
  }

}
