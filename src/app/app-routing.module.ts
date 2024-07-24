import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; 
import {ProfileComponent } from './profile/profile.component';
import { PatientComponent } from './apply-for-apci/patient/patient.component';
import { DoctorComponent } from './apply-for-apci/doctor/doctor.component';
import { CnamOfficerComponent } from './apply-for-apci/cnam-officer/cnam-officer.component';
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  {path:'profile',component: ProfileComponent},
  { path: 'apply-for-apci/patient', component: PatientComponent },
  { path: 'apply-for-apci/doctor', component: DoctorComponent },
  { path: 'apply-for-apci/cnam-officer', component: CnamOfficerComponent },
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
