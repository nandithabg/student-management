import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  student:any={};
  id;

  constructor(
    private studentService:StudentService,
    private router:Router,
    private route:ActivatedRoute)
    {
      this.id = this.route.snapshot.paramMap.get('id')
      if(this.id){
        this.studentService.getStudent(this.id).pipe(take(1)).subscribe(s =>{
          this.student = s.payload.val();})
      }
    }
    
  save(student){
    if(this.id){
      this.studentService.update(this.id,student);
    }
    else{
      this.studentService.create(student);

    }
   
    this.router.navigate(['/manage/students'])
  }

  delete(){
    if(confirm('Are you sure you want to delete this product?')){
      this.studentService.delete(this.id);
      this.router.navigate(['/manage/students'])
    }
  }

  ngOnInit() {
  }

  



}
