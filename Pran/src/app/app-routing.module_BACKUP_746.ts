import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { CernerAdminLoginComponent } from './cerner-admin-login/cerner-admin-login.component';
import { HospitalAdminLoginComponent } from './hospital-admin-login/hospital-admin-login.component';
import { InitialLoginComponent } from './initial-login/initial-login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'registration', component:RegistrationComponent}
  , {path:'initiallogin', component:InitialLoginComponent}
  , {path:'cerneradminlogin', component:CernerAdminLoginComponent}
  , {path:'adminlogin', component:HospitalAdminLoginComponent}
=======
import { AdminvalidateComponent } from './adminvalidate/adminvalidate.component';
import { HospitaldetailsComponent } from './hospitaldetails/hospitaldetails.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'registration', component:RegistrationComponent},
  {path:'adminvalidate', component:AdminvalidateComponent},
  {path:'hospitaldetails', component:HospitaldetailsComponent}
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
