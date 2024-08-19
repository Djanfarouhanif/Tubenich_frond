import { Component, OnInit,Inject, PLATFORM_ID } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [ProfileComponent, FooterComponent, CommonModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
  providers: [ApiService],
  
})
export class VideosComponent implements OnInit {
    videos : any[] = []
    

  constructor(private router:Router, private apiservice: ApiService, @Inject(PLATFORM_ID) private platformId:object ){
    
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)){
      this.getVideos('access_token')
    }
    
  }
  public getVideos(tokenName: any){
    //get access_token and username in localStorage
    
    
    //get the data of youtube video
    const token = localStorage.getItem(tokenName);
    console.log(token);
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
