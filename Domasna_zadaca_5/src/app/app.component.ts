import { Component } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    kursevi=COURSES;

    coreCourse=COURSES[0];
    RxJs=COURSES[1];
    NgRx=COURSES[2];

    onAppViewed(kurs:Course){
      console.log("In app!", kurs);
    }
}
