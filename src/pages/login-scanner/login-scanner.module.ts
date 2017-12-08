import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginScannerPage } from './login-scanner';

@NgModule({
  declarations: [
    LoginScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginScannerPage),
  ],
})
export class LoginScannerPageModule {}
