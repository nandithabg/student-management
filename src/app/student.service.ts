import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  data;

  constructor(private db:AngularFireDatabase) { }

  create(student:any){
    return this.db.list('/students').push(student);
  }

  getAll(){
    return this.db.list('/students').snapshotChanges().pipe(
      map(changes=>
        changes.map(change=>
          ({ key: change.key, value :change.payload.val(), })
      ))
      )
  }

  getStudent(studentId){
    return this.db.object('/students/' + studentId).snapshotChanges();
     }

     update(studentId,student){
      return this.db.object('/students/'+ studentId).update(student);
  
    }

    delete(studentId){
      return this.db.object('/students/'+ studentId).remove();

    }

    addCourse(studentId,course){
      return this.db.list('/students/' + studentId + '/courses').push(course);

    }
    getcourseAll(studentId){
      return this.db.list('/students/' + studentId + '/courses').snapshotChanges().pipe(
        map(changes=>
          changes.map(change=>
            ({ key: change.key, value :change.payload.val(), })
        ))
        )
    }

    getcourse(studentId,courseId){
      return this.db.object('/students/' + studentId + '/courses/' + courseId).snapshotChanges();

      
    }

    updatecourse(studentId,courseId,course){
      return this.db.object('/students/' + studentId + '/courses/' + courseId).update(course);
  
    }
    deletecourse(studentId,courseId){
      return this.db.object('/students/' + studentId + '/courses/' + courseId).remove();

    }

    get(){
      return this.db.list('/students').valueChanges();
      

    }



    

}
