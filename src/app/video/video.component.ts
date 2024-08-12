import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-video',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
    constructor(private router:Router){}

    // Fonction pour activer une autre video
    video(){
      this.router.navigate(['/video'])
    }
}
