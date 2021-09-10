import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent implements OnInit {
  id;
  courseId;
  course$;
  course:any={};
  

  constructor(
    private studentService:StudentService,
    private router:Router,
    private route:ActivatedRoute) {
      
      this.id = this.route.snapshot.paramMap.get('id');
      this.course$= this.studentService.getcourseAll(this.id);

     }

     save(course){
       if(this.courseId){
         this.studentService.updatecourse(this.id,this.courseId,course);
       }
       else{
        this.studentService.addCourse(this.id,course);

       }

       this.router.navigate(['/manage/students'])

     }

     edit(cid){
       this.courseId=cid;
       this.studentService.getcourse(this.id,this.courseId).pipe(take(1)).subscribe(s =>{
        //this.cid =s.key
        this.course = s.payload.val()
      })

     }

     delete(){
      if(confirm('Are you sure you want to delete this course?')){
        this.studentService.deletecourse(this.id,this.courseId);
        this.router.navigate(['/manage/students'])
      }
    }

     




  ngOnInit() {
  }

}
