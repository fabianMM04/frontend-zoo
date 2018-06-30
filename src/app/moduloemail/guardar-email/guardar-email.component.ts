import { Component, OnInit, DoCheck }  from '@angular/core';

@Component({
  selector: 'app-guardar-email',
  templateUrl: './guardar-email.component.html',
  styleUrls: ['./guardar-email.component.css']
})
export class GuardarEmailComponent {
  title = 'Guardar email';
  emailContacto : string;

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
  }

}