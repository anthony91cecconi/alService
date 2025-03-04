import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiziComponent } from './pages/servizi/servizi.component';
import { SendComponent } from './pages/send/send.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'servizi', component: ServiziComponent },
  { path: 'send', component: SendComponent},
  { path: '**', redirectTo: 'home' }
];
