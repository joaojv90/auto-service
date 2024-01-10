import { Component } from '@angular/core';
import { AutoServiceService } from 'src/app/services/auto-service.service'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  constructor(private assignment:AutoServiceService){}

  data:any;

  ngOnInit(){
    this.assignment.getCars().subscribe( p=> {
      this.data = p
    })
  }

  saveCar(marca:string, modelo:string, anio:string, color:string){
    const temp = {
      id: this.data.length+1,
      marca: marca,
      modelo: modelo,
      anio: anio,
      color: color
    }
    this.assignment.postCars(temp).subscribe(p => {})
  }

  upDateCar(id:string, marca:string, modelo:string, anio:string, color:string){
    const temp = {
      id: id,
      marca: marca,
      modelo: modelo,
      anio: anio,
      color: color
    }
    this.assignment.putCars(temp, id).subscribe(p => {})
  }

  suprCar(id:string){
    this.assignment.deleteCars(id).subscribe()
  }

}
