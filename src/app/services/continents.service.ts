import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import {Continent, Status} from "./../model/continent.model";

@Injectable({
  providedIn: 'root'
})
export class ContinentsService {

  status: any = Status; //assign the enum status
  constructor(private http: HttpClient) {

   }
   baseUrl: string = "https://localhost/api/public/index.php/dashboard";
  //  baseUrl: string = "http://tripbylocal.group4s.in/public/index.php/dashboard";

  /**
   * List all Continents
   */
  index(){
    
    return this.http.get<Continent[]>(this.baseUrl + "/continent");
  }

  /**
   * Store the continent data 
   * @param continent
   */
  store(continent: Continent){

    this.status = Status[0];
    continent.status = this.status;

    return this.http.post(this.baseUrl + '/continent/store', continent);
  }

  /**
   * Get and show the continent detail based on id
   * @param id 
   */
  show(id: number){

    return this.http.get<Continent>(this.baseUrl + '/continent/show/' + id);
  }

  /**
   * Update continent data
   * @param continent 
   */
  update(continent: Continent){
    
    return this.http.put(this.baseUrl + '/continent/update/' + continent.id, continent);
  }
}
