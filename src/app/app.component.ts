import { Component, DoCheck, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'MEAN STACK';
  public identity;


  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {

  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }
  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }


  logout(){
      localStorage.clear();
      this.identity = null;

      this._router.navigate(['login']);
  }
}
