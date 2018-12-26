import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import {Country, Status} from "./../model/country.model";
import {Continent} from "./../model/continent.model";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  status: any = Status; //assign the enum status
  constructor(private http: HttpClient) {

   }

  baseUrl: string = window.location.hostname + "/tripbylocal/api/public/index.php/dashboard/country";
  
  continentUrl: string = window.location.hostname + "/tripbylocal/api/public/index.php/dashboard/continents";
  /**
   * List all Countries
   */
  index(){
    
    return this.http.get<Country[]>(this.baseUrl);
  }

  /**
   * Store the country data 
   * @param country
   */
  store(country: Country){

    this.status = Status[0];
    country.status = this.status;

    return this.http.post(this.baseUrl + '/store', country);
  }

  /**
   * Get and show the country detail based on id
   * @param id 
   */
  show(id: number){

    return this.http.get<Country>(this.baseUrl + '/show/' + id);
  }

  /**
   * Update country data
   * @param country 
   */
  update(country: Country){
    
    return this.http.put(this.baseUrl + '/update/' + country.id, country);
  }

  /**
   * Get all the continents list
   */
  getAllContinents(){

    return this.http.get<Continent[]>(this.continentUrl);
  }
}
