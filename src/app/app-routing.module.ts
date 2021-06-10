import { SignUpComponent } from './users/sign-up/sign-up.component';
import { LoginComponent } from './users/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
