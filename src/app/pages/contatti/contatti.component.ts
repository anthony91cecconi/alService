import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SectioncontattiComponent } from "../../sections/sectioncontatti/sectioncontatti.component";
import { SectionfooterComponent } from "../../sections/sectionfooter/sectionfooter.component";

@Component({
  selector: 'app-contatti',
  standalone: true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [SectioncontattiComponent, SectionfooterComponent],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss'
})
export class ContattiComponent {

}
