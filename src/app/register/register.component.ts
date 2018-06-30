import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {User} from '../models/user';
import { Http } from '@angular/http';
import {GLOBAL} from '../services/global';
import {UserService} from '../services/user.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent implements OnInit {
  public title: String;
  public user:User;
  public status : string;
  constructor(
    // propiedades privadas del Router, son objeto tipo router
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.title ="Registro";
    this.user = new User('','','','','ROLE_USER','');
  }

  ngOnInit() {
    console.log('register.componet cargando!!');
   // console.log(this._userService.register())
  }
  onSubmit(registerForm){
    this._userService.register(this.user).subscribe(
        response=>{
        
          if(response.user && response.user._id){

            this.status = 'success';
            this.user = new User('','','','','ROLE_USER','');
            registerForm.reset();
          }else{
           
            this.status = 'error';

          }
          
        }, 
        error =>{
          console.log(<any>error);
        }
    );

  }
}
