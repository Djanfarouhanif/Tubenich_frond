import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-video',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
  providers: [ApiService]
})
export class VideoComponent {

    constructor(private router:Router, private apiservice: ApiService){

      // recuper les video enregistre dans db
     
    }

    // Fonction pour activer une autre video
    video(){
      this.router.navigate(['/video'])
    }
}
