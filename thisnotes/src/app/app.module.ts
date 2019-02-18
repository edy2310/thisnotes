import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CreateStudentComponent} from './dashboard/create-student/create-student.component'
import { ManageStudentsComponent } from './dashboard/manage-students/manage-students.component';
import { CreateAnnounceComponent } from './dashboard/create-announce/create-announce.component';
import { ManageAnnouncementsComponent } from './dashboard/manage-announcements/manage-announcements.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';

//Services
import {LoggedCookieService} from './_services/logged-cookie.service';

//Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    BackofficeComponent,
    DashboardComponent,
    CreateStudentComponent,
    ManageStudentsComponent,
    CreateAnnounceComponent,
    ManageAnnouncementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers: [
    CookieService,
    LoggedCookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
