import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
//Servicios
import {UserService} from './services/user.services';

 //importar nuetro nuevo modulo
 import { ModuloEmailModule } from './moduloemail/moduloemail.module';
import {AdminModule} from './admin/admin.module';
//Componentes
import { AppComponent } from './app.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ParquesComponent } from './parques/parques.component';
import { AnimalsComponent } from './animals/animals.component';
import { HomeComponent } from './home/home.component';
import { KeeperComponent } from './keeper/keeper.component';
import { ContactComponent } from './contact/contact.component';
import { PruebaComponent } from './prueba/prueba.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserEditComponent } from './user-edit/user-edit.component';
// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    HomeComponent,
    KeeperComponent,
    ContactComponent,
    PruebaComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModuloEmailModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
