import { Component } from '@angular/core';
import { NavComponent } from '../../sections/nav/nav.component';
import { FooterComponent } from "../../sections/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
