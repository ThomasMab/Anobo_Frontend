import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
// ajout des pages que exporté de chaque fichier js (export class) (1)
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewUpUEPage } from '../pages/NewUpUE/NewUpUE'
import { NewUEPage } from "../pages/NewUpUE/NewUE/NewUE";
import { UpUEPage } from "../pages/NewUpUE/UpUE/UpUE";



// Ajout chaque import (1) dans declaration
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewUpUEPage,
    NewUEPage,
    UpUEPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  // Ajout chaque import (1) dans entryComponent
  entryComponents: [
    MyApp,
    HomePage,
    NewUpUEPage,
    NewUEPage,
    UpUEPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
