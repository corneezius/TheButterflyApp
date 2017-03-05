import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';
import { MessagesPage } from '../pages/messages/messages';
import { IdeasPage } from '../pages/ideas/ideas';
import { ProfilePage } from '../pages/profile/profile';
import { VerificationPage } from '../pages/verification/verification';
import { LoginPage } from '../pages/login/login';
import { PhoneService } from '../services/phone';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    IdeasPage,
    MessagesPage,
    LoginPage,
    VerificationPage,
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IdeasPage,
    MessagesPage,
    LoginPage,
    VerificationPage,
    ProfilePage
  ],

  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  PhoneService
  ]
})
export class AppModule {}
