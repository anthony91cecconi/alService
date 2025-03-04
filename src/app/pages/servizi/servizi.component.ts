import { Component } from '@angular/core';
import { NavComponent } from '../../sections/nav/nav.component';
import { FooterComponent } from '../../sections/footer/footer.component';
import { ContactComponent } from '../../sections/contact/contact.component';

@Component({
  selector: 'app-servizi',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    ContactComponent
  ],
  templateUrl: './servizi.component.html',
  styleUrl: './servizi.component.scss'
})
export class ServiziComponent {

}
