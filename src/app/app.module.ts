import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { routing } from './app.routing';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {MatInputModule,MatRadioModule,MatDatepickerModule,MatFormFieldModule,MatNativeDateModule,MatSelectModule,MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule, MatFormFieldControl} from '@angular/material';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    MenuComponent
  ],
  imports: [
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
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
