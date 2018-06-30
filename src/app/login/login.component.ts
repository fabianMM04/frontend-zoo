import { Component, OnInit , } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: String;
  public user: User;
  public identity;
  public token;
  public status :string;

  constructor(
    // propiedades privadas del Router, son objeto tipo router
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = "Identificate";
    this.user = new User('', '', '', '', 'ROLE_USER', '');
  }

  ngOnInit() {
    console.log('login.componet cargando!!');
    console.log (this._userService.getIdentity());
    console.log (this._userService.getToken());

  }


  onSubmit() {
    /* LOGUEAR AL USUARIO  Y CONSEGUIR EL OBJETO LIMPIO */
    //console.log(this.user);
    this._userService.signup(this.user).subscribe(
      response => {
        /*  identity  en la propiedad --_> en identity guardo lo que me devuelva mi api
         this.identity = response.user; ----> recojo el usuario
        */
        this.identity = response.user;
        if (!this.identity || !this.identity._id) {
          alert("el usuario no se ha logueado correctamente");

        } else {
        /* Conseguir el token 
              
              aqui en este punto es cuando el login es exitoso
              */
              this.identity.password="";
              localStorage.setItem('identity', JSON.stringify(this.identity));

          this._userService.signup(this.user, 'true').subscribe(
            response => {
              this.token = response.token;
            
              if (this.token.length <= 0) {
                alert("el token no se ha generado");
              } else {
                /* Mostrar token */
                localStorage.setItem('token', this.token );
                this.status = 'success';

                this._router.navigate(['/']);
              }
            },
            error => {
              console.log(<any>error);
            }
          );
        }
      },
      error => {
        var errorMessage = <any>error;
        if(errorMessage != null){

          
          this.status = 'error';
        }
       
      }
    );
  }
}
