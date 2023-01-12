import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Course, suzi} from '../model/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit{
    constructor(){}
    @Input()
    title:string="";

    @Input()
    indeks:number=0;
    
    @Input()
    crs:Course=suzi;

    @Output('y')
    x=new EventEmitter<Course>();

    ngOnInit(){

    }

    onCrsViewed(){
      console.log("In course-card component!");
      this.x.emit(this.crs);
    }

    klasi()
    {
      return {
        'advanced':this.crs.category=="ADVANCED", 
        'course-card':true};
    }

    stilovi()
    {
      if(this.crs.category=="ADVANCED")
        return {'background-image':'url('+this.crs.iconUrl+')'};
      else
        return {'background-color':'yellow'};
    }

    stilovi2()
    {
      return {'font-family': 'Cursive'};
    }
}
