import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-accuille',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './accuille.component.html',
  styleUrl: './accuille.component.css'
})
export class AccuilleComponent {
      constructor(private router: Router){}

      navigateToForms(){
        this.router.navigate(['/forms'])
      }
}
