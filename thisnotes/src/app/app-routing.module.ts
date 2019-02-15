import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BackofficeComponent} from './backoffice/backoffice.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CreateStudentComponent} from './dashboard/create-student/create-student.component';
import {ManageStudentsComponent} from './dashboard/manage-students/manage-students.component';
import {CreateAnnounceComponent} from './dashboard/create-announce/create-announce.component'
import {ManageAnnouncementsComponent} from './dashboard/manage-announcements/manage-announcements.component';

const routes: Routes = [
  {path: 'login', component: BackofficeComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    {path: 'createstudent', component: CreateStudentComponent},
    {path: 'managestudents', component: ManageStudentsComponent},
    {path: 'createannounce', component: CreateAnnounceComponent},
    {path: 'manageannouncements', component: ManageAnnouncementsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
