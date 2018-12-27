import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CitiesService } from './../services/cities.service';  
import {City, Status} from "./../model/city.model";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  cities: City[];

  constructor(private router: Router, private cityService: CitiesService) { }

  ngOnInit() {
    // console.log("ip = " + window.location.hostname);
    //get the all city data
    this.cityService.index().subscribe(data => {this.cities = data; console.log(this.cities)});
  }

  /**
   * redirect to create city view page
   */
  create(): void{

    if(localStorage.getItem("id") !== null)localStorage.removeItem('id');  

    this.router.navigate(['city/create']);
  }

  /**
   * 
   * @param city redirect to edit 
   */
  edit(city: City): void{

    if(localStorage.getItem("id") !== null)localStorage.removeItem('id');  

    localStorage.setItem('id', city.id.toString());  
    this.router.navigate(['city/create']);
  }

}
