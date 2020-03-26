import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public message:string;
  constructor(public userService:UserService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  register(event){
    event.preventDefault();
    const form =event.target;
    const user={
      email:form.email.value,
      username:form.username.value,
      password:form.password.value,
    }
    this.userService.signup(user)
    .subscribe(
      res=>{
        console.log(res);
        this.message=res.message;
        setTimeout(() => this.message="", 2500);
      },
      err=>console.error(err)
    )
    event.target.reset();
  }
}