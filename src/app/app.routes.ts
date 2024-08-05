import { Routes } from '@angular/router';
import { AccuilleComponent } from './accuille/accuille.component';
import { FormsComponent } from './forms/forms.component';

import { LoginComponent } from './login/login.component';
import { VideosComponent } from './videos/videos.component';

export const routes: Routes = [
    {path:'' , redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: AccuilleComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'videos', component: VideosComponent}
];
