import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent {

  constructor(private ruta: Router, private assignment:UsersService){}

  data:any;
  ngOnInit(){
    this.assignment.getUsers().subscribe(p=>{
      this.data = p
    })
  }

  logout(){
    localStorage.setItem('login','false')
    this.ruta.navigate(['/us'])
  }

}
