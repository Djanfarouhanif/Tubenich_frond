import { Routes } from '@angular/router';
import { AccuilleComponent } from './accuille/accuille.component';
import path from 'path';

export const routes: Routes = [
    {path:'' , redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: AccuilleComponent},
];
