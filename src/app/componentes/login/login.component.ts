import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();
  title = 'Login';

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  

  Ingresar() {
    console.log(this.usuario);

    if (this.usuario.email == '1234' && this.usuario.pass == '1234'){
      
      console.log("True del if")
      this.route.navigate(['home'])
    } else {
      console.log("False del if")
      this.route.navigate(['error'])
    }
  }

}
