import {Component} from 'angular2/core';
import {IStudent} from './istudent';
import {StudentService} from './student.service';
import {OnInit} from 'angular2/core';
import {StudentDetailComponent} from './student-detail.component';

@Component({
    selector: 'my-app',
    template:`
      <ul class="heroes">
        <li *ngFor="#student of students" (click) = "onSelect(student)">
          <span class="badge">{{student.name}}</span>
        </li>
      </ul>
      <student-detail [student]="selectStudent"></student-detail>
    `,
    styles:[`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 10em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0em;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #EEE;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0em 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0px 0px 4px;
      }
  `],
  directives: [StudentDetailComponent],
  providers: [StudentService]
})
export class AppComponent implements OnInit{
  public selectStudent: IStudent;
  constructor(private _studentService: StudentService) { }
  ngOnInit() {
    this.getStudents();
  }  
  onSelect(student: IStudent) {
    this.selectStudent = student;
  }
  getStudents() {
    return this.students = this._studentService.getStudents();
  }
}
