import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormGroup, FormControl, Validator, FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
    myForm!: FormGroup

    constructor(){
      this.myForm = new FormGroup({
          username: new FormControl(''),
          email: new FormControl(''),
          password1 : new FormControl(''),
          password: new FormControl(''),
          choise: new FormControl(''),
          checkbox : new FormControl('')
      });
    }
    onSubmit(form:NgForm){
      if(form.valid){
          
        console.log(this.myForm.value)
      }
      else{
        console.log('form not valid')
      }
    };
}
