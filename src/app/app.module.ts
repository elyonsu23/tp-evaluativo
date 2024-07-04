import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';

//VINCULACIONES/IMPORTACIONES CON FIREBASE 
import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire/compat'; // Es para el Cloud Firestore
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //Es para la autentificacion
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; //Es para la BD de archivos e imagenes


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Componentes globales
    SharedModule,
    //Inicializa firebase en nuestro proyecto
    AngularFireModule.initializeApp(environment.firebaseConfig),
    //AUTENTIFICACION
    AngularFireAuthModule,
    //Storage -> BD de imagenes
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
