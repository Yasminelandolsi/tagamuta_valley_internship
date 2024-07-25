import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctorForm: FormGroup;
  imageSrc: string | ArrayBuffer | null = null; // For image preview
  apciIdentifier: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute) {
    this.doctorForm = this.fb.group({
      apciIdentifier: [''], // Add identifier to the form
      doctorName: ['', Validators.required],
      doctorSpeciality: ['', Validators.required],
      location: ['', Validators.required],
      conventionCode: ['', Validators.required],
      patientName: ['', Validators.required],
      socialNumber: ['', Validators.required],
      date: ['', Validators.required],
      doctorSignature: [null, Validators.required] // Changed to null
    });
  }

  ngOnInit(): void {
    // Retrieve APCI identifier from URL parameters
    this.route.queryParams.subscribe(params => {
      this.apciIdentifier = params['id'];
      this.doctorForm.patchValue({
        apciIdentifier: this.apciIdentifier
      });
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      // Preview the image
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result; // Display the image preview
      };
      reader.readAsDataURL(file);

      // Set the file to the form control
      this.doctorForm.patchValue({
        doctorSignature: file
      });
    }
  }

  onSubmit() {
    if (this.doctorForm.valid) {
      const formData = new FormData();
      
      // Append form fields to FormData
      Object.keys(this.doctorForm.controls).forEach(key => {
        const control = this.doctorForm.get(key);
        if (control) {
          formData.append(key, control.value);
        }
      });

      // Send form data including the file to the server
      this.http.post('your-upload-endpoint', formData).subscribe(response => {
        console.log('Form submitted successfully:', response);
      });
    }
  }
}
