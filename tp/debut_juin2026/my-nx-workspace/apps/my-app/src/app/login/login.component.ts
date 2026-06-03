import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = signal("")

  onLogin(){
      sessionStorage.setItem("username" , this.username());
  }

  onLogout(){
      this.username.set("?")
      //sessionStorage.setItem("username" , "");
      sessionStorage.removeItem("username")
  }
}
