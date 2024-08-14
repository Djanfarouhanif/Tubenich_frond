import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from '../api.service';

import { Router } from '@angular/router'

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, HttpClientModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  providers: [ApiService]
})
export class FormsComponent {
   
    myForm!: FormGroup
  //Pour verifier la validation des information en d'envoyer
    constructor(private route:Router, private apiservice: ApiService){
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
      //verifier si password1 et password son compatible
      if( this.myForm.get('password1')?.value === this.myForm.get('password')?.value){
        //en suit verifier que forms est valide ou pas
        if(this.myForm.valid){
        //recuper  les valeur envoyer par l'utilisateur
          const formValut = {
            'user': {
                'username': this.myForm.get('username')?.value,
                'email': this.myForm.get('email')?.value,
                'password': this.myForm.get('password')?.value
            },
            
            'langage': this.myForm.get('choise')?.value
  
          };
          
          this.apiservice.postData(formValut).subscribe(
            response => {
              //recuper le token et login user et l'envoyer a la page d'accuille
              const data = {
                'username': this.myForm.get('username'),
                'password': this.myForm.get('password')
              }
              this.apiservice.loginUser(data).subscribe(
                response =>{
                  const access_token = response['access'];
                  //verifier si la connexion a reussi 
                  localStorage.setItem('access_token', access_token)
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
