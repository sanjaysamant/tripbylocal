import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import {City, Status} from "./../model/city.model";
import {Continent} from "./../model/continent.model";
import {Country} from "./../model/country.model";
import { count } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  status: any = Status; //assign the enum status
  constructor(private http: HttpClient) {

   }
   baseUrl: string = "http://localhost/api/public/index.php/dashboard";
  //  baseUrl: string = "http://tripbylocal.group4s.in/public/index.php/dashboard/"; 
  /**
   * List all Countries
   */
  index(){
    
    return this.http.get<City[]>(this.baseUrl + "/city");
  }

  /**
   * Store the city data 
   * @param city
   */
  store(city: City){

    this.status = Status[0];
    city.status = this.status;

    return this.http.post(this.baseUrl + '/city/store', city);
  }

  /**
   * Get and show the city detail based on id
   * @param id 
   */
  show(id: number){

    return this.http.get<City>(this.baseUrl + '/city/show/' + id);
  }

  /**
   * Update city data
   * @param city 
   */
  update(city: City){
    
    return this.http.put(this.baseUrl + '/city/update/' + city.id, city);
  }

  /**
   * Get all the continents list
   */
  getAllContinents(){

    return this.http.get<Continent[]>(this.baseUrl + "/all_continents");
  }

  /**
   * Get all the countries based on continent
   */
  getCountries(continent_id){

    return this.http.get<Country[]>(this.baseUrl + "/get_countries/" + continent_id);
  }
}
