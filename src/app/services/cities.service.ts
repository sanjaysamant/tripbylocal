import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import {City, Status} from "./../model/city.model";
import {Continent} from "./../model/continent.model";
import {Country} from "./../model/country.model";

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  status: any = Status; //assign the enum status
  constructor(private http: HttpClient) {

   }

  baseUrl: string = window.location.hostname + "/tripbylocal/api/public/index.php/dashboard/city";
  
  continentUrl: string = window.location.hostname + "/tripbylocal/api/public/index.php/dashboard/all_continents";
  /**
   * List all Countries
   */
  index(){
    
    return this.http.get<City[]>(this.baseUrl);
  }

  /**
   * Store the city data 
   * @param city
   */
  store(city: City){

    this.status = Status[0];
    city.status = this.status;

    return this.http.post(this.baseUrl + '/store', city);
  }

  /**
   * Get and show the city detail based on id
   * @param id 
   */
  show(id: number){

    return this.http.get<City>(this.baseUrl + '/show/' + id);
  }

  /**
   * Update city data
   * @param city 
   */
  update(city: City){
    
    return this.http.put(this.baseUrl + '/update/' + city.id, city);
  }

  /**
   * Get all the continents list
   */
  getAllContinents(){

    return this.http.get<Continent[]>(this.continentUrl);
  }
}
