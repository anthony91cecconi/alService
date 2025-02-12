import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiziComponent } from './pages/servizi/servizi.component';
import { ChiSiamoComponent } from './pages/chi-siamo/chi-siamo.component';
import { GalleriaComponent } from './pages/galleria/galleria.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { PulizieComponent } from './pages/services/pulizie/pulizie.component';

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "servizi",
    component: ServiziComponent
  },
  {
    path: "chi-siamo",
    component: ChiSiamoComponent
  },
  {
    path: "galleria",
    component: GalleriaComponent
  },
  {
    path: "contatti",
    component: ContattiComponent
  },
  {
    path: "services/pulizie",
    component:PulizieComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];
