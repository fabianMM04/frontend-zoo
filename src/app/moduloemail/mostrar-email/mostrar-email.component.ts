import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-mostrar-email',
  templateUrl: './mostrar-email.component.html',
  styleUrls: ['./mostrar-email.component.css']
})
export class MostrarEmailComponent implements OnInit, DoCheck {
  title = 'Mostrar email';
  emailContacto : string;

  ngDoCheck(){
    
    this.emailContacto = localStorage.getItem('emailContacto');
  }
  ngOnInit(){

  }
  borrarEmail(){
    localStorage.removeItem('emailContacto');
    // vaciar el localStorage completo
    localStorage.clear();
    this.emailContacto= null;

  }
}
