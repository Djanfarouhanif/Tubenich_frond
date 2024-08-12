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
  styleUrl: './forms.component.css'
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
      if(this.myForm.valid){
          
        console.log(this.myForm.value)
        this.route.navigate(['/videos'])
      }
      else{
        console.log('form not valid')
      }
    };

    //Fonction pour envoyer les donner via l'api
    send(){
      const data = {
        'user': {
          'username': 'irzzz',
          'password': 'DDDDDDDDDDDDDDDDD',
          'email': 'hs@gmail.com',
          'last_name' : 'tode'
        },
        'langage': 'python'
      }
      this.apiservice.postData(data).subscribe(
        response =>{
          console.log(response);
        },
        error =>{
          console.log(error);
        }
      );
   
    };
      
}
