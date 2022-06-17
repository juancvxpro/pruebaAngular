import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/listar/listar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
