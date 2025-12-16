import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  images: string[] = [
    'assets/imgi_1_poert1.png',
    'assets/imgi_2_port2.png',
    'assets/imgi_3_port3.png',
    'assets/imgi_1_poert1.png',
    'assets/imgi_2_port2.png',
    'assets/imgi_3_port3.png'
  ];
  
  selectedImage: string | null = null;
  
  openImage(imageUrl: string) {
    this.selectedImage = imageUrl;
  }
  
  closeImage() {
    this.selectedImage = null;
  }
  
}
