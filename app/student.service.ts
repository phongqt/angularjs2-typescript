import {students} from './mock-student';
import {Injectable} from 'angular2/core';

@Injectable()
export class StudentService {
  getStudents() {
    return students;
  }
}