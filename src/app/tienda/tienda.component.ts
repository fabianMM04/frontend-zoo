import { Component, OnInit } from '@angular/core';
import * as $ from 'node_modules/jquery/dist/jquery.min.js';

declare var jQuery:any;

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo;
  public nombreDelPaque: string;
  public miParque;
  constructor() {
    this.titulo = 'esta es la tienda';

  }

  ngOnInit() {
    $('#textojq').hide();
  $('#botonjq').click(function(){
    console.log("clic desde jQuery");
    $('#textojq').removeClass('hidden').slideToggle();
    
  });

  
  }
  mostrarNombre() {

    console.log(this.nombreDelPaque);
  }

  VerDatosParques(event){
    console.log(event);
    this.miParque =event;
  }
}
