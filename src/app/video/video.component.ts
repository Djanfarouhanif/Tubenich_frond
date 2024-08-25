import { Component, OnInit,Inject ,PLATFORM_ID } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common'


@Component({
  selector: 'app-video',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css',
  providers: [ApiService]
})
export class VideoComponent implements OnInit{
    videoId: string | null = '';
    title: string | null = "";
    videoUrl!: SafeResourceUrl; 
    accessToken: string = "access_token";
    videos: any[] = []

    constructor(private router:Router, private apiservice: ApiService, private route:ActivatedRoute, private sanitizer: DomSanitizer, @Inject(PLATFORM_ID) private platformId:object){}

  ngOnInit(){
    //Virifier si l'utilisateur est sur un navigateur
    if(isPlatformBrowser(this.platformId)){
      this.getVideo()
    }
    //recuper l'id du video 
    this.videoId = this.route.snapshot.paramMap.get('id');
    console.log('videoId', this.videoId);

    if(this.videoId){
      //securiser lien de l'url youtube
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.videoId}?autoplay=1&rel=0`)
      this.apiservice.getVideo(this.videoId).subscribe(
        response =>{
          
          this.title = response['data']['title']
        }, 
        error =>{
          console.log(error)
        }
      )
    }else{
      console.log('Video not found');
    }
   
  }

  //Afficher les vidoes de suggestion sur la page de lecture video
  getVideo(){
    //get token which is sauve in localstorage
    const token = localStorage.getItem(this.accessToken)
    if(token){
      this.apiservice.getData(token).subscribe(
        response =>{
          this.video = response;
        }, error =>{
          console.log(error);
        }
      );
    }else{
      console.log("token not found");
    }
    
  }

    // Fonction pour activer une autre video
    video(){
      this.router.navigate(['/video'])
    }
}
