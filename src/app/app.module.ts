import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PatientComponent } from './apply-for-apci/patient/patient.component';
import { DoctorComponent } from './apply-for-apci/doctor/doctor.component';
import { CnamDecisionComponent } from './cnamdecision/cnamdecision.component';
import { CnamOfficerComponent } from './profile/cnam-officer/cnam-officer.component';
import { CnamComponent } from './voirapci/cnam/cnam.component';
import { ItemComponent } from './item-component/item.component';
import { ApciinfoComponent } from './apciinfo/apciinfo.component';
import { FinalDecisionListComponent } from './final-decision-list/final-decision-list.component'; // Correct path
import { FinalDecisionService } from './final-decision.service';

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
    ItemComponent,
    ApciinfoComponent,
    FinalDecisionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FinalDecisionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
