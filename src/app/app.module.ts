import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //importamos el http cliente
    HttpClientModule,
    //imortando libreria de tarjetas de alerta
     NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
