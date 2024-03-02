import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private user:UserService, private route:Router) { }

  ngOnInit(): void {
  }

  Registerform = new FormGroup({
    firstName : new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('^[A-Z][a-z]{1,}(\s[A-Z][a-z]{2,})*$')]),
    lastName : new FormControl('',[Validators.required, Validators.minLength(2), Validators.pattern('^[A-Z][a-z]{1,}$')]),
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$')]),
    confirmpassword : new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$')])
  });

  onRegister(){
    let reqData = {
      firstName:this.Registerform.value.firstName,
      lastName:this.Registerform.value.lastName,
      email:this.Registerform.value.email,
      password:this.Registerform.value.password,
      confirmpassword:this.Registerform.value.confirmpassword
    }
    this.user.register(reqData).subscribe((Response:any) => {
      console.log(Response);
    })
  }
}
