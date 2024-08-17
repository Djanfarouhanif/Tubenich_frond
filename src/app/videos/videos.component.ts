import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [ProfileComponent, FooterComponent, CommonModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
  providers: [ApiService]
})
export class VideosComponent {
    videos : any[] = []
    

  constructor(private router:Router, private apiservice: ApiService){
    
  }


  public getVideos(tokenName: any){
    //get access_token and username in localStorage
    
    
    //get the data of youtube video
    const token = localStorage.getItem(tokenName)
    this.apiservice.getData(token).subscribe(
      response =>{
        this.videos = response
        console.log(this.videos);
      },
      error =>{
        console.log(error);
      }
    )
  };

  // Fonction pour rediriger ver une video en utilisant son id
  goToVideo(VideoId: any){
    this.router.navigate([`/video`, VideoId])
  }
  
}
