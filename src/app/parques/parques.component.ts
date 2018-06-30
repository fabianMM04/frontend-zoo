import { Component, OnInit, Input,Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnChanges,OnInit, DoCheck, OnDestroy {
  //cuando digo input digo que esa propiedad me vas a venir de afuera
  @Input() nombre: string;
  @Input() metros: number;
  public vegetacion : string;
  public abierto : boolean;
  @Output() pasameLosDatos = new EventEmitter();
  constructor() {
    this.nombre="Parques natural para caballos";
    this.metros=450;
    this.vegetacion="alta";
    this.abierto=false;
   }
   //este metodo se ejecuta cuando se carga la directiva
   // es un metodo que se ejecuta una vez por componente
   ngOnInit(){
    console.log('Metodo ngOnInit');

   }
   // se ejecuta cuando se hace algun cambio en la propiedades de nuestro componetes
   ngOnChanges(changes:SimpleChanges){
    console.log(changes);
   }
  //se lanza despues del OnInit y despues de  ngOnChanges , ngDoCheck cada vez que se haga un cambio en lo que sea
   ngDoCheck(){
    console.log("el ngDoCheck se ha lanzado ");

   }

   ngOnDestroy(){
    console.log("se va a eliminar el componente ");
   }
  emitirEvento(){

    this.pasameLosDatos.emit({

      'nombre':this.nombre,
      'metros':this.metros,
     'vegetacion': this.vegetacion,
     'abierto' :this.abierto,
    });
  }
}
