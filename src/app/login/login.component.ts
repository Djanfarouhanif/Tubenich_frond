import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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

      constructor(private apiservice: ApiService, private router:Router){
          this.myForm = new FormGroup({
            username : new FormControl('', Validators.required),
            password : new FormControl('', Validators.required)
          })
      }

      //Fonction pour envoyer la requete de connexiion
     public onSubmit(){
        const data = {
          'username': this.myForm.get('username')?.value,
          'password': this.myForm.get('password')?.value
        };
        this.apiservice.loginUser(data).subscribe(
          response =>{
            const access_token = response['access'] //Récupérer le token
            //Enregistree le token dans le localStorage
            if(localStorage.getItem(`access_token_${this.myForm.get('username')?.value}`)){
              console.log('reussi avec succec');
              this.router.navigate(['videos'])
            }else{
              localStorage.setItem(`access_token_${this.myForm.get('username')?.value}`, access_token);
              this.router.navigate(['videos']);
              console.log('enregistres');
            }
            
          },
          error =>{
            console.log(error)
            //Gérer l'erreur,par exemple afficher un message à l'utilisateur
          }
        )
        
      }

     
      
}
