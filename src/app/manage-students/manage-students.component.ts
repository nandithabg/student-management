import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.css']
})
export class ManageStudentsComponent  {
  student$;
  


  constructor(private studentService:StudentService) {

    this.student$ = this.studentService.getAll();
    

   
   }


  
}
