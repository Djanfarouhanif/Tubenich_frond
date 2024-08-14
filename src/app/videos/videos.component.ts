import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router'
import { ApiService } from '../api.service';


@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [ProfileComponent, FooterComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
  providers: [ApiService]
})
export class VideosComponent {
    
  constructor(private router:Router, private apiservice: ApiService){}

  //Recuper les videos en utilisant le token

  public getVideos(){
    //appel de this.logincomponet pour recuper le token
   
  }

  // Fonction pour rediriger ver une video en utilisant son id
  public video(){
    this.router.navigate(['/video'])
  }
}
