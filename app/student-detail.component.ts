import {Component} from 'angular2/core';
import {Hero} from './istudent';

@Component({
  selector: 'student-detail',
  template: `
    <div *ngIf="student">
      <h2>{{student.name}} details!</h2>
      <div><label>age: </label>{{student.age}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="student.name" placeholder="name"/>
      </div>
    </div>
  `,
  inputs: ['student']
})
export class StudentDetailComponent {
  public student: IStudent;
}