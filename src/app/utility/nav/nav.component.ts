import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, ViewChild, Inject, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent{

  @ViewChild('sidebar', { static: false }) sidebar!: ElementRef;
  @ViewChild('content', { static: false }) content!: ElementRef;
  @ViewChild('sidebarToggle', { static: false }) sidebarToggle!: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document) { }

}
