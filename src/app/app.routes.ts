import { Routes } from '@angular/router';
import {FotosComponent} from '../componentes/fotos/fotos.component';
import {HomeComponent} from '../componentes/home/home.component';
import {AcercaComponent} from '../componentes/acerca/acerca.component';

export const routes: Routes = [
    { path: 'fotos', component: FotosComponent },
    { path: 'home', component: HomeComponent },
    { path: 'acerca', component: AcercaComponent },

    
    { path: '**', component: HomeComponent },
];
