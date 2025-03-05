import { Component } from '@angular/core';
import { FooterComponent } from "../../sections/footer/footer.component";
import { NavComponent } from '../../sections/nav/nav.component';

@Component({
  selector: 'app-were',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent
  ],
  templateUrl: './were.component.html',
  styleUrl: './were.component.scss'
})
export class WereComponent {

}
