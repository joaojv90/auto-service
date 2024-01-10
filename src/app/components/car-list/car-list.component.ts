import { Component } from '@angular/core';
import { AutoServiceService } from 'src/app/services/auto-service.service'

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})

export class CarListComponent {

  constructor(private assignment:AutoServiceService){}

  data:any;

  ngOnInit(){
    this.assignment.getCars().subscribe( p=> {
      this.data = p
    })
  }
}
