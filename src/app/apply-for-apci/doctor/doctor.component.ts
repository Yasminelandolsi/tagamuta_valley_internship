import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApciIdentifierService } from '../apci-identifier.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctorForm: FormGroup;
  imageSrc: string | ArrayBuffer | null = null;
  apciIdentifier: string = '';
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private apciIdentifierService: ApciIdentifierService // Inject the service
  ) {
    this.doctorForm = this.fb.group({
      apciIdentifier: [''],
      doctorName: ['', Validators.required],
      doctorSpeciality: ['', Validators.required],
      location: ['', Validators.required],
      conventionCode: ['', Validators.required],
      patientName: ['', Validators.required],
      socialNumber: ['', Validators.required],
      date: ['', Validators.required],
      doctorSignature: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    // Generate or retrieve APCI identifier
    this.apciIdentifier = 'APCI-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    this.apciIdentifierService.setApciIdentifier(this.apciIdentifier); // Store in the service
    this.doctorForm.patchValue({
      apciIdentifier: this.apciIdentifier
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);

      this.doctorForm.patchValue({
        doctorSignature: file
      });
    }
  }

  onSubmit() {
    if (this.doctorForm.valid) {
      const formData = new FormData();
      Object.keys(this.doctorForm.controls).forEach(key => {
        const control = this.doctorForm.get(key);
        if (control) {
          if (key !== 'doctorSignature') {
            formData.append(key, control.value);
          } else {
            formData.append(key, control.value as File);
          }
        }
      });

      this.http.post('http://localhost:8081/api/doctor/submit', formData, { responseType: 'text' }).subscribe(
        response => {
          console.log('Form submitted successfully:', response);
          this.isSubmitted = true;
          alert('Formulaire du patient soumis avec succès');
        }, 
        error => {
          console.error('Error submitting form:', error);
          this.isSubmitted = false;
          alert('Erreur lors de la soumission du formulaire');
        }
      );
    }
  }
}
