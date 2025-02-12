import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SectionfooterComponent } from "../../sections/sectionfooter/sectionfooter.component";

@Component({
  selector: 'app-galleria',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [SectionfooterComponent],
  templateUrl: './galleria.component.html',
  styleUrl: './galleria.component.scss'
})
export class GalleriaComponent {

}
