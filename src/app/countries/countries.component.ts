import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CountriesService } from './../services/countries.service';  
import {Country, Status} from "./../model/country.model";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: Country[];

  constructor(private router: Router, private countryService: CountriesService) { }

  ngOnInit() {

    //get the all continents data
    this.countryService.index().subscribe(data => this.countries = data);
  }

  /**
   * redirect to create country view page
   */
  create(): void{

    if(localStorage.getItem("id") !== null)localStorage.removeItem('id');  

    this.router.navigate(['country/create']);
  }

  /**
   * 
   * @param country redirect to edit 
   */
  edit(country: Country): void{

    if(localStorage.getItem("id") !== null)localStorage.removeItem('id');  

    localStorage.setItem('id', country.id.toString());  
    this.router.navigate(['country/create']);
  }
}
