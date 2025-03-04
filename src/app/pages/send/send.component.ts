import { Component } from '@angular/core';
import { NavComponent } from '../../sections/nav/nav.component';
import { FooterComponent } from '../../sections/footer/footer.component';

@Component({
  selector: 'app-send',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent
  ],
  templateUrl: './send.component.html',
  styleUrl: './send.component.scss'
})
export class SendComponent {

}
