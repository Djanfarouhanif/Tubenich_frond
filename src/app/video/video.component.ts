import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser'


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
    constructor(private router:Router, private apiservice: ApiService, private route:ActivatedRoute, private sanitizer: DomSanitizer){}

  ngOnInit(){
    
    
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

    // Fonction pour activer une autre video
    video(){
      this.router.navigate(['/video'])
    }
}
