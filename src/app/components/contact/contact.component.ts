import { Component } from '@angular/core';
import {  FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule ,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  DataUser: FormGroup = new FormGroup({
    name:new FormControl('' ,[ Validators.required ]),
    phone: new FormControl('',[Validators.required]),
    jop: new FormControl('',[]),
    email: new FormControl('',[Validators.email]),

});

handleSubmitForm(){
  const userData = this.DataUser.value;
  if(this.DataUser.valid === true){
      console.log(this.DataUser.value      );

     }
     else{
      console.log(this.DataUser);
     }
  }




}
