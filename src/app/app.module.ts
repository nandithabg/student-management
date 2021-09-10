import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { AuthGuardService} from './auth-guard.service';
import { ManageStudentsComponent } from './manage-students/manage-students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentService } from './student.service';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ManageStudentsComponent,
    StudentFormComponent,
    ManageCourseComponent,
    NavbarComponent,
    CoursesComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path:'', component:HomeComponent },
      { path:'students', component:StudentsComponent ,canActivate:[AuthGuardService] },
      { path:'courses', component:CoursesComponent  },
      { path:'manage/students/new', component:StudentFormComponent  },
      { path:'manage/students/:id', component:StudentFormComponent  },
      { path:'manage/students', component:ManageStudentsComponent  },
      { path:'manage/course/:id', component:ManageCourseComponent  },
     

    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
