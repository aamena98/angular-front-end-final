import{ Routes,RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { UpdateProfilepicComponent } from './update-profilepic/update-profilepic.component';
import { LoginPageComponent } from './login-page/login-page.component';

const arr:Routes=[
  {path:'',component:AdminDashboardComponent},
  {path:'studentDisplay',component:StudentDisplayComponent},
  {path:'updateStudent/:id',component:EditStudentComponent},
  {path:'updateprofilepic/:id',component:UpdateProfilepicComponent},
 {path:'login',component:LoginPageComponent}
];


  export const routing=RouterModule.forRoot(arr);
