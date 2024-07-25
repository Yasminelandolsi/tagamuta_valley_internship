import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './apply-for-apci/patient/patient.component';
import { DoctorComponent } from './apply-for-apci/doctor/doctor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CnamDecisionComponent } from './cnamdecision/cnamdecision.component';
import { CnamOfficerComponent } from './profile/cnam-officer/cnam-officer.component';
import { CnamComponent } from './voirapci/cnam/cnam.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PatientComponent,
    DoctorComponent,
    CnamDecisionComponent,
    CnamOfficerComponent,
    CnamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
