import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule,MatCardModule,MatCheckboxModule,MatRadioModule,MatSortModule,MatDatepickerModule,MatTableModule,MatFormFieldModule,MatNativeDateModule,MatSelectModule,MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatFormFieldControl} from '@angular/material';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { UpdateProfilepicComponent } from './update-profilepic/update-profilepic.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { TeacherDisplayComponent } from './teacher-display/teacher-display.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { UpdateTeacherProfileComponent } from './update-teacher-profile/update-teacher-profile.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { StudentAttendanceComponent } from './TeacherDashBoard/student-attendance/student-attendance.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ClassTeacherComponent } from './class-teacher/class-teacher.component';
import { EditClassTeacherComponent } from './edit-class-teacher/edit-class-teacher.component';
import { ClassTeacherDisplayComponent } from './class-teacher-display/class-teacher-display.component';
import { DivisionComponent } from './division/division.component';
import { AddDivisionComponent } from './add-division/add-division.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NewStudentAttendanceComponent } from './new-student-attendance/new-student-attendance.component';
import { ExamresultComponent } from './examresult/examresult.component';
import { NewExamResultComponent } from './new-exam-result/new-exam-result.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    MenuComponent,
    StudentDisplayComponent,
    EditStudentComponent,
    UpdateProfilepicComponent,
    LoginPageComponent,
    AddStudentFormComponent,
    AddTeacherComponent,
    TeacherDisplayComponent,
    EditTeacherComponent,
    UpdateTeacherProfileComponent,
    AddNoticeComponent,
    StudentAttendanceComponent,
    AddUserComponent,
    ClassTeacherComponent,
    EditClassTeacherComponent,
    ClassTeacherDisplayComponent,
    DivisionComponent,
    AddDivisionComponent,
    ForgetPasswordComponent,
    NewStudentAttendanceComponent,
    ExamresultComponent,
    NewExamResultComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    LayoutModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatCardModule,
    MatStepperModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
