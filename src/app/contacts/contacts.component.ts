import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',

})
export class ContactComponent {

  username = '';
  useAge = '';
  userEmail = '';
  userPassword = '';

  isFilled(value: string): boolean {
    return value.trim() !== '';
  }
}

