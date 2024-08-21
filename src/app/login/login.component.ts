import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { VideosComponent } from '../videos/videos.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [ApiService]
})
export class LoginComponent {

    myForm!: FormGroup
    userToken:any
      constructor(private apiservice: ApiService, private router:Router){
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
            const access_token = response['access']; //Récupérer le token
            const refresh_token = response['refresh']; //Recuperer refresh token
            //Enregistree le token dans le localStorage
            
            this.userToken = `access_token`
            localStorage.setItem('refresh_token', refresh_token)
            if(localStorage.getItem(this.userToken)){
              this.router.navigate(['videos'])
              //GET OTHER YOUTUBE DATA
              
            }else{
             
              localStorage.setItem(this.userToken, access_token);
              this.router.navigate(['videos']);
              
              
            }
            
          },
          error =>{
            console.log(error)
            //Gérer l'erreur,par exemple afficher un message à l'utilisateur
          }
        )
        
      }

     
      
}
