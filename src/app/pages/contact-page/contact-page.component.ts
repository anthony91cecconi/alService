import { Component } from '@angular/core';
import { NavComponent } from '../../sections/nav/nav.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { FooterComponent } from '../../sections/footer/footer.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    NavComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}
