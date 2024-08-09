import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApciIdentifierService {
  private apciIdentifier: string | null = null;

  setApciIdentifier(identifier: string): void {
    this.apciIdentifier = identifier;
  }
  getApciIdentifier(): string | null {
    return this.apciIdentifier;
  }
}
