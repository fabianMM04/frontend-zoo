import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {User} from '../models/user';
import { Http } from '@angular/http';
import {GLOBAL} from '../services/global';
import {UserService} from '../services/user.services';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public title: String;
  public user: User;
  public identity;
  public token;
  public status :string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title='Actualizar mis datos';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
   }

  ngOnInit() {
    console.log("user-edit cargado!!");

  }


  onSubmit(){
    this._userService.updateUser(this.user).subscribe(
      response=>{
      
        if(!response.user){
          this.status = 'error';

        }else{
          this.status = 'success';
        localStorage.setItem('identity', JSON.stringify(this.user));

        }
        
      }, 
      error =>{
        var errorMessage = <any>error;
        if(errorMessage != null){

          
          this.status = 'error';
        }
      }
  );
  }
}
