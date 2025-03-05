import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiziComponent } from './pages/servizi/servizi.component';
import { SendComponent } from './pages/send/send.component';
import { WereComponent } from './pages/were/were.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'servizi', component: ServiziComponent },
  { path: 'send', component: SendComponent},
  { path: 'dove-siamo' , component: WereComponent},
  { path: 'contatti', component:ContactPageComponent},
  { path: '**', redirectTo: 'home' }
];
