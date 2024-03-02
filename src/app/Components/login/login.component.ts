import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormControlName, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private user:UserService, private route:Router) { }

  ngOnInit(): void {
  }

  LoginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  });

  onSubmit(){
    console.log(this.LoginForm)
    
      let reqData = {
        email: this.LoginForm.value.email,
        password: this.LoginForm.value.password
      }
      this.user.Login(reqData).subscribe((Response:any) => {
        console.log(Response);
        localStorage.setItem("token",Response.data)
      
      })
    
  }
}
