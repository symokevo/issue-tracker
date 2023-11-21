import { Component } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent {
  issues: Issue[] = []; 

  // Injecting the IssuesService in the constructor
  constructor( private issueService: IssuesService ) {};

  // a method to call the getPendingIssues method of the injected service
  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }
}
