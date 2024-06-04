import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//importando servicio de email
import {EmailService} from "../../services/email.service"
//importando pop-up
import { NgToastService } from 'ng-angular-popup';
//importando loading screen
import Notiflix from 'notiflix';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit  {

  formulario:FormGroup= new FormGroup({})

  constructor(private emailService:EmailService,private toast: NgToastService){}

  ngOnInit(): void {
    
    ///definiendo valores del formulario
    this.formulario = new FormGroup({
      
      
      name: new FormControl('',
        [
          //agregando validaciones
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
    
        ]),

      email: new FormControl('',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ),
      phone: new FormControl('',
        [
          Validators.required
        ]
      ),
      subject: new FormControl('',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)
        ]
      ),
      message: new FormControl('',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(500)
        ]
      )
      
    })
  }

  //funcion enviar email
  sendEmail () {
    //loading screen
    Notiflix.Loading.standard('enviando...')
    var{name,email,phone,subject,message} = this.formulario.value
    this.emailService.sendEmail$(name,email,phone,subject,message).subscribe({
      next:(res) =>{

        //close loading screen  
        Notiflix.Loading.remove()
        //alert message sucess
        this.toast.success({ detail: "Se ah enviado el mensaje!!", summary: "Pronto entrare en contacto"});
        console.log ("mensaje enviado")
      },

      error: (error) => {
        //capturando mensaje de error desde el express validator 
        console.log(error)
        this.toast.error({ detail: "Error al enviar tu mensaje!!", summary: error.error });

      }
    })
  }



}
