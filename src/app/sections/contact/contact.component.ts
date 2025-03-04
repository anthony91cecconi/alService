import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  // Email di destinazione da utilizzare nel fallback (mailto)
  targetEmail: string = 'anthony.cecconi.91@gmail.com';

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      telephone: ['',  Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, subject, message } = this.contactForm.value;
      emailjs.send(
        'service_xyldmrc',  // Sostituisci con il tuo Service ID
        'template_o8l19nl', // Sostituisci con il tuo Template ID
        this.contactForm.value,
        '7kOe_kYpbce0r0xy2'      // Sostituisci con il tuo User ID o public key
      )
      .then((response: EmailJSResponseStatus) => {
        console.log('Email inviata con successo!', response.status, response.text);
        this.router.navigate(['/send']);
      }, (err : any) => {
        console.error('Errore durante l\'invio via EmailJS:', err);
        // Se l'errore indica che il limite gratuito è stato superato, utilizziamo il fallback mailto
        if (err && err.text && err.text.toLowerCase().includes('limit')) {
          const mailtoLink = `mailto:${this.targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Nome: ' + name + '\nEmail: ' + email + '\n\n' + message)}`;
          window.location.href = mailtoLink;
        } else {
          // Altri errori: gestisci l'errore in maniera appropriata (ad esempio mostrando un alert)
          alert('Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi.');
        }
      });
    }
  }
}
