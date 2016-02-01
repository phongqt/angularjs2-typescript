import {Component} from 'angular2/core';
interface IStudent {
  name: '';
  age: 0;
  job: '';
}

@Component({
    selector: 'my-app',
    template: '<h1>My name is {{student.name}}, and I am {{student.age}} years old and i am a {{student.job}}</h1><div><input [(ngModel)]="student.name" placeholder="name"></div>'
})
export class AppComponent {
  public student : IStudent = {
    name: 'Victoria',
    age: 19,
    job: 'student'
  }

}
