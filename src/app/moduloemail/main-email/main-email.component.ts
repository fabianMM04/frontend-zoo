import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'main-email',
  templateUrl: './mail-email.component.html',
})
export class MainEmailComponent implements OnInit {
  title = 'Mostrar email';



   ngOnInit(){
     console.log('componente principal del modulo cargado');
   }
}
