import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  stu;

  constructor( private studentService:StudentService) {
    this.stu = this.studentService.get();

      
     }

     generateArray(obj){
      return Object.keys(obj).map((key)=>{ return {key:key, value:obj[key]}});
  }

   

  ngOnInit(){
  }

  
    

}
