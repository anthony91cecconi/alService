import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './utility/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'al-service';
}
