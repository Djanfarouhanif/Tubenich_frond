import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccuilleComponent } from './accuille/accuille.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AccuilleComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tubenich';
}
