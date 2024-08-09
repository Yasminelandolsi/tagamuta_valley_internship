// src/app/item-component/item.component.ts
import { Component, OnInit } from '@angular/core';
import { ItemService } from './item.service';
import { ApciIdentifierService } from '../apply-for-apci/apci-identifier.service'; // Correct import path
import { Router } from '@angular/router';

interface Item {
  apciIdentifier?: string;
  conventionCode?: string;
  date?: string;
  doctorName?: string;
  doctorSignature?: string;
  doctorSpeciality?: string;
  location?: string;
  patientName?: string;
  socialNumber?: string;
  id?: number; // Optional id
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: Item[] = [];
  userName: string = ''; // Store the username
  apciIdentifier: string = ''; // Store APCI Identifier

  constructor(
    private itemService: ItemService,
    private apciIdentifierService: ApciIdentifierService, // Inject the service
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch the username from local storage
    this.userName = localStorage.getItem('userName') || '';
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getItems().subscribe(data => {
      // Filter the items where patientName matches the userName
      this.items = data.filter(item => item.patientName === this.userName);
    });
  }

  

  // Method to set APCI identifier and update form if applicable
  setApciIdentifier(item: Item): void {
    if (item.apciIdentifier) {
      this.apciIdentifierService.setApciIdentifier(item.apciIdentifier); // Store in the service
      this.apciIdentifier = item.apciIdentifier;
      // Optionally, update the form if you have a form to patch
      // Example: this.doctorForm.patchValue({ apciIdentifier: this.apciIdentifier });
    }
  }

 completeItem(): void {
    this.router.navigate(['apply-for-apci/patient']);
  }
}


