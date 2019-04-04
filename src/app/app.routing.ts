import{ Routes,RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { UpdateProfilepicComponent } from './update-profilepic/update-profilepic.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddTeacherComponent } from "./add-teacher/add-teacher.component";
import { TeacherDisplayComponent } from "./teacher-display/teacher-display.component";
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { UpdateTeacherProfileComponent } from "./update-teacher-profile/update-teacher-profile.component";
import { AddNoticeComponent } from "./add-notice/add-notice.component";
import { StudentAttendanceComponent } from "./TeacherDashBoard/student-attendance/student-attendance.component";
import { AddUserComponent } from './add-user/add-user.component';
import { ClassTeacherComponent } from './class-teacher/class-teacher.component';
import { ClassTeacherDisplayComponent } from './class-teacher-display/class-teacher-display.component';
import { EditClassTeacherComponent } from './edit-class-teacher/edit-class-teacher.component';
import { AddDivisionComponent } from './add-division/add-division.component';
import { DivisionComponent } from './division/division.component';
import { NewStudentAttendanceComponent } from './new-student-attendance/new-student-attendance.component';
import { ExamresultComponent } from './examresult/examresult.component';
import { NewExamResultComponent } from './new-exam-result/new-exam-result.component';

const arr:Routes=[
  {path:'',component:AdminDashboardComponent},
  {path:'studentDisplay',component:StudentDisplayComponent},
  {path:'updateStudent/:id',component:EditStudentComponent},
  {path:'updateprofilepic/:id',component:UpdateProfilepicComponent},
 {path:'login',component:LoginPageComponent},
 {path:'addTeacher',component:AddTeacherComponent},
 {path:'teacherDisplay',component:TeacherDisplayComponent},
 {path:'updateTeacher/:id',component:EditTeacherComponent},
 {path:'updateTeacherProfile/:id',component:UpdateTeacherProfileComponent},
 {path:'AddNotice',component:AddNoticeComponent},
 {path:'StudentAttendance',component:StudentAttendanceComponent},
 {path:'AddUser',component:AddUserComponent},
 {path:'classTeacher',component:ClassTeacherComponent},
{path:'classTeacherDisplay',component:ClassTeacherDisplayComponent},
{path:'updateClassTeacher/:id',component:EditClassTeacherComponent},
{path:'addDivision',component:AddDivisionComponent},
{path:'displayDivision',component:DivisionComponent},
{path:'newattendance',component:NewStudentAttendanceComponent},
{path:'result',component:ExamresultComponent},
{path:'newresult',component:NewExamResultComponent}
];


  export const routing=RouterModule.forRoot(arr);
