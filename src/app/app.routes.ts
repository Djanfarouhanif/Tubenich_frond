import { Routes } from '@angular/router';
import { AccuilleComponent } from './accuille/accuille.component';
import { FormsComponent } from './forms/forms.component';
import path from 'path';

export const routes: Routes = [
    {path:'' , redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: AccuilleComponent},
    {path: 'forms', component: FormsComponent}
];
