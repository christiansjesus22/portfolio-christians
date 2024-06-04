import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
//importando modulo de formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';
//importando formaateador de numero de telefono
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HeaderComponent } from './header/header.component';
import { Section01Component } from './section01/section01.component';
import { Section02Component } from './section02/section02.component'


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    FormComponent,
    HeaderComponent,
    Section01Component,
    Section02Component,
   
  ],
  imports: [
    CommonModule,
    //importando modulo de navegacion
    RouterModule, 
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  exports:[
    //exportando componentes
    NavbarComponent,
    FooterComponent,
    FormComponent,
    HeaderComponent,
    Section01Component,
    Section02Component
    
  ]

})
export class SharedModule { }
