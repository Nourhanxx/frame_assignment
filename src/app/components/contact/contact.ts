import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-contact',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  userName = '';
  userAge = '';
  userEmail = '';
  userPassword = '';
  
}
