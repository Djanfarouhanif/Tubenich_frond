import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router'

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
    myForm!: FormGroup

    constructor(private route:Router){
      this.myForm = new FormGroup({
          username: new FormControl('', Validators.required),
          email: new FormControl('', [Validators.email, Validators.required]),
          password1 : new FormControl('', [Validators.required, Validators.minLength(8)]),
          password: new FormControl('', [Validators.required, Validators.minLength(8)]),
          choise: new FormControl('', Validators.required),
          checkbox : new FormControl('', Validators.required)
      });
    }
    onSubmit(){
      if(this.myForm.valid){
          
        console.log(this.myForm.value)
        this.route.navigate(['/videos'])
      }
      else{
        console.log('form not valid')
      }
    };
}
