import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Componentes
import { MainComponent } from './../admin/main/main.component';
import { AddComponent } from './../admin/add/add.component';
import { EditComponent } from './../admin/edit/edit.component';
import { ListComponent } from './../admin/list/list.component';
import { AdminGuard } from '../services/admin.guard';
const adminRoutes: Routes=[
    {path:'admin-panel',
     component:MainComponent,
     canActivate: [AdminGuard],
     children: [
        {path: '', redirectTo: 'listado', pathMatch: 'full'},
        {path: 'listado', component:ListComponent},
        {path: 'crear', component:AddComponent},
        {path: 'editar', component:EditComponent},

        
     ]

     
},
{path: 'listado-del-panel', component:ListComponent},
];

@NgModule({
 imports:[
     RouterModule.forChild(adminRoutes)
 ],
 exports:[
     RouterModule
 ]
  })

export class AdminRoutingModule{}