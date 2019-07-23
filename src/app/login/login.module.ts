import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { OtpGenComponent } from './otp-gen/otp-gen.component';

@NgModule({
  declarations: [
    LoginComponent,
    OtpGenComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
