import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
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
    
    thaimnail = []

  constructor(private router:Router, private apiservice: ApiService){
    
  }


  public getVideos(tokenName: any){
    //get access_token and username in localStorage
    
    
    //get the data of youtube video
    const token = localStorage.getItem(tokenName)
    this.apiservice.getData(token).subscribe(
      response =>{
        console.log(response);
      },
      error =>{
        console.log(error);
      }
    )
  };

  // Fonction pour rediriger ver une video en utilisant son id
  
}
