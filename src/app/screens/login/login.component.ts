import { Component } from '@angular/core';
import { GuardsCheckStart, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: UsersService, private ruta: Router) {}

  /*nick: string = "Joao2023";
  pass: string = "dpamplin0";*/

  copyJSON(nick: string, pass: string) {
    const temp = {
      user_id: nick,
      pass: pass
    }
    return temp;
  }

  data:any;
  ngOnInit(){
    this.service.getUsers().subscribe(p=>{
      this.data = p;
    })
  }

  login(nick: string, pass: string) {
    const aux = this.copyJSON(nick, pass)
    for(let item of this.data){
      if(JSON.stringify(item) ==  JSON.stringify(aux)){
        localStorage.setItem('login', 'true');
        this.ruta.navigate(['/private'])
        break;
      } else {
        localStorage.setItem('login', 'false')
      }
    }
  }

}
