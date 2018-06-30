import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

 import{ AdminRoutingModule } from './../admin/admin.routing.module';


//Componentes
import { MainComponent } from './../admin/main/main.component';
import { AddComponent } from './../admin/add/add.component';
import { EditComponent } from './../admin/edit/edit.component';
import { ListComponent } from './../admin/list/list.component';

//Guards
import {UserService} from '../services/user.services';
import { AdminGuard } from '../services/admin.guard';

@NgModule({
  declarations: [
    MainComponent,
    AddComponent,
    EditComponent,
    ListComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule
  ],
  exports: [
    MainComponent,
    AddComponent,
    EditComponent,
    ListComponent

  ],
  providers:[
    AdminGuard,
    UserService
  ]

})
export class AdminModule { }
