import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

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
    console.log(user)
    event.target.reset();
  }
}
