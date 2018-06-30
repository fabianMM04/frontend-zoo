import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { TiendaComponent } from './tienda/tienda.component';
import { ParquesComponent } from './parques/parques.component';
import { AnimalsComponent } from './animals/animals.component';
import { HomeComponent } from './home/home.component';
import { KeeperComponent } from './keeper/keeper.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserEditComponent } from './user-edit/user-edit.component';
const appRoutes: Routes=[
{path:'', component:HomeComponent},
{path:'', redirectTo:'home', pathMatch:'full'},
{path: 'home', component:HomeComponent},
{path: 'animal', component:AnimalsComponent},
{path: 'cuidadores', component:KeeperComponent},
{path: 'contacto', component:ContactComponent},
{path: 'tienda', component:TiendaComponent},
{path: 'registro', component:RegisterComponent},
{path: 'login', component:LoginComponent},
{path: 'mis-datos', component:UserEditComponent},
{path: '**', component:HomeComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);