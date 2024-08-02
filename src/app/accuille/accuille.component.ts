import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-accuille',
  standalone: true,
  imports: [],
  templateUrl: './accuille.component.html',
  styleUrl: './accuille.component.css'
})
export class AccuilleComponent {
      constructor(private router: Router){}

      navigateToForms(){
        this.router.navigate(['/forms'])
      }
}
