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
    AddTeacherComponent
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
