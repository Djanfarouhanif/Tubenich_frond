import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router'


@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [ProfileComponent, FooterComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
    
  constructor(private router:Router){}

  // Fonction pour rediriger ver une video en utilisant son id
  video(){
    this.router.navigate(['/video'])
  }
}
