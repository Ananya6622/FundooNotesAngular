import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  token: any;

  constructor(private formbuilder: FormBuilder, private user:UserService, private route:Router) { }

  ngOnInit(): void {
  }
  ResetPasswordForm = new FormGroup({
    Password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$')]),
    ConfirmPassword: new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$')])
  });

  onResetPassword(){
    if(this.ResetPasswordForm.valid){
      let reqData = {
        password: this.ResetPasswordForm.value.password,
        confirmPassword: this.ResetPasswordForm.value.confirmPassword
      }
      this.user.ResetPassword(reqData, this.token).subscribe((Response:any) => {
        console.log(Response);
      })
    }
  }

}
