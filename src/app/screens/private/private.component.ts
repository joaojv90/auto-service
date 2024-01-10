import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-private',
    templateUrl: './private.component.html',
    styleUrls: ['./private.component.css'],
    standalone: true,
    imports: [NgFor]
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
