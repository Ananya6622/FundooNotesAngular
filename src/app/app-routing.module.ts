import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';

const routes: Routes = [
  {path : 'Login', component : LoginComponent},
  {path : 'ForgotPassword', component : ForgotPasswordComponent},
  {path : 'ResetPassword', component : ResetPasswordComponent},
  {path:"Register", component:RegisterComponent},
  {path:"Dashboard", component:DashboardComponent,
children:[
  {path:'createNotes',component:CreateNotesComponent},
  {path:'displayNotes',component:DisplayNotesComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
