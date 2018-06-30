import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export class UserService {
    public url: string;
    public identity ;
    public token ;
    constructor(public http: HttpClient) {
        //esto se hace para utilizar la url y reutilizar la url de mi api
        this.url = GLOBAL.url;

    }


    //pasar un objeto como parametro al register
    register(user_to_register): Observable<any> {

        /*let va a tener todo los parametros que se le va a pasar por post a mi api
        el Json.Stringify()--> Stringify quiere decir que le voy a pasar un objeto Json convertido
        en String 
        */

        let params = JSON.stringify(user_to_register);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });


        // return this.http.post(this.url+'register', params, {headers: headers})
        // .map(res=> res.json());
        return this.http.post(this.url + 'register', params, { headers: headers });
    }



    signup( user_to_login, gettoken = null) :Observable<any>{
            if(gettoken != null){
                user_to_login.gettoken = gettoken;

            }
        let params = JSON.stringify(user_to_login);
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    
        return this.http.post(this.url + 'login', params, { headers: headers });

    }
  /* va a hacer un metodo auxiliar
  dentro del metodo se hace un Json.parse para convertir el string que tengo en el localStrorage
  */
    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));

        if(identity != "undefined"){
            this.identity = identity; 
        }else{
            this.identity = null;
        }
        return this.identity;
    }
    getToken(){
        let token = localStorage.getItem('token');

        if(token != "undefined"){
            this.token = token; 
        }else{
            this.token = null;
        }
        return this.token;
    }


    updateUser(user_to_update) :Observable<any>{
 
    let params = JSON.stringify(user_to_update);
    let headers = new HttpHeaders({
         'Content-Type': 'application/json',
          'Authorization': this.getToken()
    } );


    return this.http.put(this.url + 'update-user/'+user_to_update._id, params, { headers: headers });

    }
}
