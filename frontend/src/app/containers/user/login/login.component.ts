import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  public message:string;
  public errorMsg:string;
  constructor(public userService:UserService) { }
  login(event){
    event.preventDefault();
    const form = event.target;
    const user = {
      username:form.username.value,
      password:form.password.value,
    }
    this.userService.login(user)
    .subscribe(
      res=>{
        this.message=res.message;
        setTimeout(() => {
          this.message="";
        }, 2500);
      },
      err=>{
        console.error(err);
        this.errorMsg=err.error.message
      }
    )
  }
}
