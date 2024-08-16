import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VideosComponent } from '../videos/videos.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, VideosComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [ApiService, VideosComponent]
})
export class LoginComponent {

    myForm!: FormGroup
    userToken:any
      constructor(private apiservice: ApiService, private router:Router, private videoscomponent: VideosComponent){
          this.myForm = new FormGroup({
            username : new FormControl('', Validators.required),
            password : new FormControl('', Validators.required)
          })
      }

      //Fonction pour envoyer la requete de connexiion
     public onSubmit(){
      const username = this.myForm.get('username')?.value;
      const password = this.myForm.get('password')?.value
        const data = {
          'username': username,
          'password': password
        };
        this.apiservice.loginUser(data).subscribe(
          response =>{
            const access_token = response['access'] //Récupérer le token
            //Enregistree le token dans le localStorage
            
            this.userToken = `access_token_${username}`
           
            if(localStorage.getItem(this.userToken)){
              this.router.navigate(['videos'])
              //GET OTHER YOUTUBE DATA
              this.videoscomponent.getVideos(this.userToken)
            }else{
             
              localStorage.setItem(this.userToken, access_token);
              this.router.navigate(['videos']);
              this.videoscomponent.getVideos(this.userToken)
              
            }
            
          },
          error =>{
            console.log(error)
            //Gérer l'erreur,par exemple afficher un message à l'utilisateur
          }
        )
        
      }

     
      
}
