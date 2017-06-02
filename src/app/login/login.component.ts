import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerrequestService } from '../serverrequest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title;
  public username: any;
  public password: any;
  private validate: any;

  constructor(private router: Router, private serverrequestService: ServerrequestService) {
    this.title = "this is coming from the login component";
  }

  ngOnInit() {
  }

  public url = "https://api.myjson.com/bins/18y6i9";
  private login() {
    this.serverrequestService.validate(this.url)
      .then(res => this.validate = res);
    console.log(this.validate);
    // if(this.validate.username === this.username && this.validate.password === this.password){
    this.router.navigate(['home']);
    // }else{
    // this.router.navigate(['login']);
    // }
  }
}
