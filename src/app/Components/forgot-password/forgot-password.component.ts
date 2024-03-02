import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private user:UserService, private route:Router) { }

  ngOnInit(): void {
  }

  ForgotPasswordForm = new FormGroup({
    Email: new FormControl('',[Validators.required,Validators.email])
  });

onForgotPassword(){
  if(this.ForgotPasswordForm.valid){
    let reqData = {
      email: this.ForgotPasswordForm.value.email,
    }
    this.user.ForgetPassword(reqData).subscribe((Response:any) => {
      console.log(Response);
    })
  }
}
}
