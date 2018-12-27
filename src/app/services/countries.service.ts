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

  //  baseUrl: string = "http://localhost/api/public/index.php/dashboard";
  baseUrl: string = "https://tripbylocal.group4s.in/public/index.php/dashboard/"; 
  
  /**
   * List all Countries
   */
  index(){
    
    return this.http.get<Country[]>(this.baseUrl + "/country");
  }

  /**
   * Store the country data 
   * @param country
   */
  store(country: Country){

    this.status = Status[0];
    country.status = this.status;

    return this.http.post(this.baseUrl + '/country/store', country);
  }

  /**
   * Get and show the country detail based on id
   * @param id 
   */
  show(id: number){

    return this.http.get<Country>(this.baseUrl + '/country/show/' + id);
  }

  /**
   * Update country data
   * @param country 
   */
  update(country: Country){
    
    return this.http.put(this.baseUrl + '/country/update/' + country.id, country);
  }

  /**
   * Get all the continents list
   */
  getAllContinents(){

    return this.http.get<Continent[]>(this.baseUrl + "/continents");
  }
}
