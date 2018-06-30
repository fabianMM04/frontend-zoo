// Importar modulos necesarios para crear modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//importar compotentes
//Componentes
import { GuardarEmailComponent } from './guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './mostrar-email/mostrar-email.component';
import { MainEmailComponent } from './main-email/main-email.component';

// decorador Ngmodule para cargar los componente y la configuracion del modulos

@NgModule({
    declarations: [
        GuardarEmailComponent,
        MostrarEmailComponent,
        MainEmailComponent

    ],
    exports:[MainEmailComponent],

    imports: [
        CommonModule,
        FormsModule
    ],
  })
  export class ModuloEmailModule { }