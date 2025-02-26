import { Component } from '@angular/core';
import { NavComponent } from '../../sections/nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
