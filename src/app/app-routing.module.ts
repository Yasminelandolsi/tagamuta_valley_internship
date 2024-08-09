import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './apply-for-apci/patient/patient.component';
import { DoctorComponent } from './apply-for-apci/doctor/doctor.component';
import { PatientComponent as PatientProfileComponent } from './profile/patient/patient.component';
import { DoctorComponent as DoctorProfileComponent } from './profile/doctor/doctor.component';
import { CnamOfficerComponent } from './profile/cnam-officer/cnam-officer.component';
import { CnamComponent as CnamViewComponent } from './voirapci/cnam/cnam.component';
import { CnamDecisionComponent } from './cnamdecision/cnamdecision.component';
import { ItemComponent } from './item-component/item.component'; // Import ItemComponent
import {ApciinfoComponent} from './apciinfo/apciinfo.component'

import { FinalDecisionListComponent } from './final-decision-list/final-decision-list.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'apply-for-apci/patient', component: PatientComponent },
  { path: 'apply-for-apci/doctor', component: DoctorComponent },
  { path: 'profile/patient', component: PatientProfileComponent },
  { path: 'profile/doctor', component: DoctorProfileComponent },
  { path: 'profile/cnam', component: CnamOfficerComponent },
  { path: 'voirapci/cnam', component: CnamViewComponent },
  { path: 'cnamdecision', component: CnamDecisionComponent },
  { path: 'item', component: ItemComponent }, // Add route for ItemComponent
  { path: 'apciinfo', component: ApciinfoComponent },
  { path: 'list', component: FinalDecisionListComponent }, // Add route for ItemComponent
  // Add route for ItemComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
