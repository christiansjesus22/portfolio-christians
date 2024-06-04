import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  title = 'porfolio-landing';




  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior:"smooth"})
  }

  toProjects(){
    document.getElementById("projects")?.scrollIntoView({behavior:"smooth"})
  }

  




}
