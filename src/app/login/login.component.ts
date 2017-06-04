import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerrequestService } from '../service/serverrequest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: any;
  private validate: any;
  public url = 'https://api.myjson.com/bins/18y6i9';

  constructor(private router: Router, private serverrequestService: ServerrequestService) { }

  ngOnInit() {
  }

  private login() {
    this.serverrequestService.getLogin(this.url)
      .subscribe(
      comments => {
        this.validate = comments;
        if (this.validate.username === this.username && this.validate.password === this.password) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }
      },
      err => {
        console.log(err);
      });
  }
}
