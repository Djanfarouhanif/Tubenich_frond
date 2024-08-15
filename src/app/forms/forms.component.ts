import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from '../api.service';

import { Router } from '@angular/router'
import { VideosComponent } from '../videos/videos.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, HttpClientModule, VideosComponent ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  providers: [ApiService, VideosComponent]
})
export class FormsComponent {
   
    myForm!: FormGroup
    userToken: any
  //Pour verifier la validation des information en d'envoyer
    constructor(private route:Router, private apiservice: ApiService, private videoscomponent: VideosComponent){
      this.myForm = new FormGroup({
          username: new FormControl('', Validators.required),
          email: new FormControl('', [Validators.email, Validators.required]),
          password1 : new FormControl('', [Validators.required, Validators.minLength(8)]),
          password: new FormControl('', [Validators.required, Validators.minLength(8)]),
          choise: new FormControl('', Validators.required),
          checkbox : new FormControl('', Validators.required)
      });
    }

    
    //fonction pour la validation du formular une foie clicker
    onSubmit(){
      const username = this.myForm.get('username')?.value;
      const email = this.myForm.get('email')?.value;
      const password1 = this.myForm.get('password1')?.value;
      const password = this.myForm.get('password')?.value;
      const langage = this.myForm.get('choise')?.value;
      const checkbox = this.myForm.get('checkbox')?.value;

      //verifier si password1 et password son compatible
      if( password === password1){
        //en suit verifier que forms est valide ou pas
        if(this.myForm.valid){
        //  les Donner  enregistre par l'utilisateur
          const formValut = {
            'user': {
                'username': username,
                'email': email,
                'password': password
            },
            
            'langage': langage
  
          };
          
          this.apiservice.postData(formValut).subscribe(
            response => {
              //recuper le token et login user et l'envoyer a la page d'accuille
              const data = {
                'username': username,
                'password': password
              }
              //Save User name in localstorage
              this.userToken = `access_token_${username}`
              //redirect user from videos component
              this.route.navigate(['videos'])
              console.log(response)
              //connexion de nouveau utilisateur
              this.apiservice.loginUser(data).subscribe(
                response =>{
                  console.log(response);
                  const access_token = response['access'];
                  //verifier si la connexion a reussi 
                  localStorage.setItem(this.userToken, access_token)
                  this.videoscomponent.getVideos(this.userToken)
                },
                error =>{
                  console.log(error);
                }
              )
            },
            error => {
              console.log(error);
            }
          );
          
        }
        else{
          console.log('form not valid')
        };
      }
      else{
        console.log("password not matching")
      }
      
    };

    //Fonction pour envoyer les donner via l'api
      
}
