import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
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

      constructor(private apiservice: ApiService){
          this.myForm = new FormGroup({
            username : new FormControl('', Validators.required),
            password : new FormControl('', Validators.required)
          })
      }

      //Fonction pour envoyer la requete de connexiion
      onSubmit(){
        const data = {
          'username': this.myForm.get('username')?.value,
          'password': this.myForm.get('password')?.value
        }
        this.apiservice.loginUser(data).subscribe(
          response => {
            console.log(response);
          },
          error =>{
            console.log(error);
          }
        )
      }
}
