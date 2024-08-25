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
    videos : any[] = [];
    private tokenKey = "access_token"; //Nom du token dans localStorage
    

  constructor(private router:Router, private apiservice: ApiService, @Inject(PLATFORM_ID) private platformId:object ){
    
  }

  ngOnInit(): void {
    //Verifier si l'utilisateur est sur un navigateur
    if(isPlatformBrowser(this.platformId)){
      this.getVideos()
    }
    
  }


  public getVideos(){ 
    
    //get access_token and username in localStorage
    const token = localStorage.getItem(this.tokenKey)
    //get the data of youtube video
    if(token){
      console.log(token);
      this.apiservice.getData(token).subscribe(
        response =>{
          this.videos = response
          
        },
        error =>{
          console.log(error);
        }
      )
    }else{
      console.log("Jeton non trouver");
    }

   
  };

  // Fonction pour rediriger ver une video en utilisant son id
  goToVideo(VideoId: any){
    this.router.navigate([`/video`, VideoId])
  }
  
}
